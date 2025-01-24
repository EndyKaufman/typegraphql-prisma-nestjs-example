import type { GraphQLResolveInfo } from "graphql";
import * as graphqlFields from "graphql-fields";
import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Type, createParamDecorator } from "@nestjs/common";
import { APP_INTERCEPTOR, ContextIdFactory, ModuleRef } from "@nestjs/core";
import * as DataLoader from "dataloader";
import { Observable } from "rxjs";
import { GqlExecutionContext } from "@nestjs/graphql";

export function transformInfoIntoPrismaArgs(info: GraphQLResolveInfo, modelName?: string, collectionName?: string, prismaMethod?: string): Record<string, any> {
  const fields: Record<string, any> = graphqlFields(
    // suppress GraphQLResolveInfo types issue
    info as any,
    {},
    {
      excludedFields: ['__typename'],
      processArguments: true,
    }
  );
  return transformFields(fields, modelName, collectionName, prismaMethod);
}

function transformFields(fields: Record<string, any>, modelName?: string, collectionName?: string, prismaMethod?: string): Record<string, any> {
  return Object.fromEntries(
    Object.entries(fields)
      .map<[string, any]>(([key, value]) => {
        if (Object.keys(value).length === 0) {
          return [key, true];
        }
        if ("__arguments" in value) {
          return [key, Object.fromEntries(
            value.__arguments.map((argument: object) => {
              const [[key, { value }]] = Object.entries(argument);
              return [key, value];
            })
          )];
        }
        return [key, transformFields(value, modelName, collectionName, prismaMethod)];
      }),
  );
}

export function getPrismaFromContext(context: any) {
  const prismaClient = context["prisma"];
  if (!prismaClient) {
    throw new Error("Unable to find Prisma Client in GraphQL context. Please provide it under the `context[\"prisma\"]` key.");
  }
  return prismaClient;
}

export function transformCountFieldIntoSelectRelationsCount(_count: object, modelName?: string, collectionName?: string, prismaMethod?: string) {
  return {
    include: {
      _count: {
        select: {
          ...Object.fromEntries(
            Object.entries(_count).filter(([_, v]) => v != null)
          ),
        }
      },
    },
  }
}

export let transformArgsIntoPrismaArgs = async function <TArgs = Record<string, any>, TContext = any>(info: GraphQLResolveInfo, args: TArgs, ctx: TContext, modelName?: string, collectionName?: string, prismaMethod?: string, afterProcessEvents?: ((result: any) => Promise<any>)[]): Promise<TArgs> {
  return args;
};

export function setTransformArgsIntoPrismaArgs(newTransformArgsIntoPrismaArgs: typeof transformArgsIntoPrismaArgs) {
  transformArgsIntoPrismaArgs = newTransformArgsIntoPrismaArgs;
}

export class GraphqlError extends Error { }

/**
 * This interface will be used to generate the initial data loader.
 * The concrete implementation should be added as a provider to your module.
 */
export interface GraphqlDataLoader<ID, Type> {
  /**
   * Should return a new instance of dataloader each time
   */
  generateDataLoader(context?: ExecutionContext): DataLoader<ID, Type>;
}

/**
 * Context key where get loader function will be stored.
 * This class should be added to your module providers like so:
 * {
 *     provide: APP_INTERCEPTOR,
 *     useClass: DataLoaderInterceptor,
 * },
 */
const NEST_LOADER_CONTEXT_KEY = 'NEST_LOADER_CONTEXT_KEY';

@Injectable()
export class GraphqlDataLoaderInterceptor implements NestInterceptor {
  constructor(private readonly moduleRef: ModuleRef) { }
  /**
   * @inheritdoc
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const graphqlExecutionContext = GqlExecutionContext.create(context);
    const ctx = graphqlExecutionContext.getContext();

    if (ctx[NEST_LOADER_CONTEXT_KEY] === undefined) {
      ctx[NEST_LOADER_CONTEXT_KEY] = {
        contextId: ContextIdFactory.create(),
        getLoader: (type: string): Promise<GraphqlDataLoader<any, any>> => {
          if (ctx[type] === undefined) {
            try {
              ctx[type] = (async () => {
                return (
                  await this.moduleRef.resolve<GraphqlDataLoader<any, any>>(
                    type,
                    ctx[NEST_LOADER_CONTEXT_KEY].contextId,
                    {
                      strict: false,
                    }
                  )
                ).generateDataLoader(context);
              })();
            } catch (e) {
              throw new GraphqlError(`The loader ${type} is not provided` + e);
            }
          }
          return ctx[type];
        },
      };
    }
    return next.handle();
  }
}

/**
 * The decorator to be used within your graphql method.
 */
export const Loader = createParamDecorator(
  async (data: Type<GraphqlDataLoader<any, any>>, context: ExecutionContext & { [key: string]: any }) => {
    const ctx: any = GqlExecutionContext.create(context).getContext();
    if (ctx[NEST_LOADER_CONTEXT_KEY] === undefined) {
      throw new GraphqlError(`
              You should provide interceptor ${GraphqlDataLoaderInterceptor.name} globally with ${APP_INTERCEPTOR}
            `);
    }
    return await ctx[NEST_LOADER_CONTEXT_KEY].getLoader(data);
  }
);


/**
 * Easy way to create a dataloader in a specific location, context only needs to be used to access global properties that are set in each request.
 * Added the ability to reuse simple dataloaders by a certain name.
 */
export const InlineLoadersStorage = new Map();
export const InlineLoader = createParamDecorator(
  (
    generateDataLoader: <ID, Type>(context?: ExecutionContext) => DataLoader<ID, Type> | { name: string; loader: DataLoader<ID, Type> },
    context: ExecutionContext & { [key: string]: any }
  ) => {
    const _class = context.getClass();
    const _handler = context.getHandler();
    const dataloader = generateDataLoader(context);

    if ('loader' in dataloader) {
      const dataloaderName = `Dataloader: ${dataloader.name}`;
      if (!InlineLoadersStorage.has(dataloaderName)) {
        InlineLoadersStorage.set(dataloaderName, dataloader.loader);
      }
      return InlineLoadersStorage.get(dataloaderName);
    } else {
      if (!InlineLoadersStorage.has(_class)) {
        InlineLoadersStorage.set(_class, new Map());
      }
      if (!InlineLoadersStorage.get(_class).has(_handler)) {
        InlineLoadersStorage.get(_class).set(_handler, dataloader);
      }
      return InlineLoadersStorage.get(_class).get(_handler);
    }
  }
);








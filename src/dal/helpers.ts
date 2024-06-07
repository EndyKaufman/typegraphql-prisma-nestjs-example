import type { GraphQLResolveInfo } from "graphql";
import * as graphqlFields from "graphql-fields";

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






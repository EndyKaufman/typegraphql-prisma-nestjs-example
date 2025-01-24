"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineLoader = exports.InlineLoadersStorage = exports.Loader = exports.GraphqlDataLoaderInterceptor = exports.GraphqlError = exports.transformArgsIntoPrismaArgs = void 0;
exports.transformInfoIntoPrismaArgs = transformInfoIntoPrismaArgs;
exports.getPrismaFromContext = getPrismaFromContext;
exports.transformCountFieldIntoSelectRelationsCount = transformCountFieldIntoSelectRelationsCount;
exports.setTransformArgsIntoPrismaArgs = setTransformArgsIntoPrismaArgs;
const graphqlFields = require("graphql-fields");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const graphql_1 = require("@nestjs/graphql");
function transformInfoIntoPrismaArgs(info, modelName, collectionName, prismaMethod) {
    const fields = graphqlFields(info, {}, {
        excludedFields: ['__typename'],
        processArguments: true,
    });
    return transformFields(fields, modelName, collectionName, prismaMethod);
}
function transformFields(fields, modelName, collectionName, prismaMethod) {
    return Object.fromEntries(Object.entries(fields)
        .map(([key, value]) => {
        if (Object.keys(value).length === 0) {
            return [key, true];
        }
        if ("__arguments" in value) {
            return [key, Object.fromEntries(value.__arguments.map((argument) => {
                    const [[key, { value }]] = Object.entries(argument);
                    return [key, value];
                }))];
        }
        return [key, transformFields(value, modelName, collectionName, prismaMethod)];
    }));
}
function getPrismaFromContext(context) {
    const prismaClient = context["prisma"];
    if (!prismaClient) {
        throw new Error("Unable to find Prisma Client in GraphQL context. Please provide it under the `context[\"prisma\"]` key.");
    }
    return prismaClient;
}
function transformCountFieldIntoSelectRelationsCount(_count, modelName, collectionName, prismaMethod) {
    return {
        include: {
            _count: {
                select: {
                    ...Object.fromEntries(Object.entries(_count).filter(([_, v]) => v != null)),
                }
            },
        },
    };
}
let transformArgsIntoPrismaArgs = async function (info, args, ctx, modelName, collectionName, prismaMethod, afterProcessEvents) {
    return args;
};
exports.transformArgsIntoPrismaArgs = transformArgsIntoPrismaArgs;
function setTransformArgsIntoPrismaArgs(newTransformArgsIntoPrismaArgs) {
    exports.transformArgsIntoPrismaArgs = newTransformArgsIntoPrismaArgs;
}
class GraphqlError extends Error {
}
exports.GraphqlError = GraphqlError;
const NEST_LOADER_CONTEXT_KEY = 'NEST_LOADER_CONTEXT_KEY';
let GraphqlDataLoaderInterceptor = class GraphqlDataLoaderInterceptor {
    constructor(moduleRef) {
        this.moduleRef = moduleRef;
    }
    intercept(context, next) {
        const graphqlExecutionContext = graphql_1.GqlExecutionContext.create(context);
        const ctx = graphqlExecutionContext.getContext();
        if (ctx[NEST_LOADER_CONTEXT_KEY] === undefined) {
            ctx[NEST_LOADER_CONTEXT_KEY] = {
                contextId: core_1.ContextIdFactory.create(),
                getLoader: (type) => {
                    if (ctx[type] === undefined) {
                        try {
                            ctx[type] = (async () => {
                                return (await this.moduleRef.resolve(type, ctx[NEST_LOADER_CONTEXT_KEY].contextId, {
                                    strict: false,
                                })).generateDataLoader(context);
                            })();
                        }
                        catch (e) {
                            throw new GraphqlError(`The loader ${type} is not provided` + e);
                        }
                    }
                    return ctx[type];
                },
            };
        }
        return next.handle();
    }
};
exports.GraphqlDataLoaderInterceptor = GraphqlDataLoaderInterceptor;
exports.GraphqlDataLoaderInterceptor = GraphqlDataLoaderInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.ModuleRef])
], GraphqlDataLoaderInterceptor);
exports.Loader = (0, common_1.createParamDecorator)(async (data, context) => {
    const ctx = graphql_1.GqlExecutionContext.create(context).getContext();
    if (ctx[NEST_LOADER_CONTEXT_KEY] === undefined) {
        throw new GraphqlError(`
              You should provide interceptor ${GraphqlDataLoaderInterceptor.name} globally with ${core_1.APP_INTERCEPTOR}
            `);
    }
    return await ctx[NEST_LOADER_CONTEXT_KEY].getLoader(data);
});
exports.InlineLoadersStorage = new Map();
exports.InlineLoader = (0, common_1.createParamDecorator)((generateDataLoader, context) => {
    const _class = context.getClass();
    const _handler = context.getHandler();
    const dataloader = generateDataLoader(context);
    if ('loader' in dataloader) {
        const dataloaderName = `Dataloader: ${dataloader.name}`;
        if (!exports.InlineLoadersStorage.has(dataloaderName)) {
            exports.InlineLoadersStorage.set(dataloaderName, dataloader.loader);
        }
        return exports.InlineLoadersStorage.get(dataloaderName);
    }
    else {
        if (!exports.InlineLoadersStorage.has(_class)) {
            exports.InlineLoadersStorage.set(_class, new Map());
        }
        if (!exports.InlineLoadersStorage.get(_class).has(_handler)) {
            exports.InlineLoadersStorage.get(_class).set(_handler, dataloader);
        }
        return exports.InlineLoadersStorage.get(_class).get(_handler);
    }
});
//# sourceMappingURL=helpers.js.map
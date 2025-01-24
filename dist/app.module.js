"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const apollo_1 = require("@nestjs/apollo");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const app_controller_1 = require("./app.controller");
const dal_1 = require("./dal");
const helpers_1 = require("./dal/helpers");
const recipes_module_1 = require("./recipes/recipes.module");
const prisma = new client_1.PrismaClient({
    log: ['query'],
});
(0, helpers_1.setTransformArgsIntoPrismaArgs)((info, args, ctx) => {
    if (info.fieldName === dal_1.UserCrudResolver.prototype.createOneUser.name && ctx.req.headers.email) {
        args.data.email = ctx.req.headers.email;
    }
    return args;
});
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            recipes_module_1.RecipesModule,
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                installSubscriptionHandlers: true,
                autoSchemaFile: process.env.VERCEL_ENV ? true : 'schema.gql',
                debug: true,
                introspection: true,
                playground: true,
                tracing: true,
                context: ({ req }) => ({ req, prisma }),
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [...dal_1.crudResolvers, ...dal_1.relationResolvers],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
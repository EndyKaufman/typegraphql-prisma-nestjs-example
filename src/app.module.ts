import { ApolloDriver } from '@nestjs/apollo';
import { Module, Provider } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaClient } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';
import { AppController } from './app.controller';
import { CreateOneUserArgs, UserCrudResolver, crudResolvers, relationResolvers } from './dal';
import { setTransformArgsIntoPrismaArgs } from './dal/helpers';
import { RecipesModule } from './recipes/recipes.module';

const prisma = new PrismaClient({
    log: ['query'],
});

setTransformArgsIntoPrismaArgs((info: GraphQLResolveInfo, args: any, ctx: any) => {
    if (info.fieldName === UserCrudResolver.prototype.createOneUser.name && ctx.req.headers.email) {
        (args as CreateOneUserArgs).data.email = ctx.req.headers.email;
    }
    return args;
});

@Module({
    imports: [
        RecipesModule,
        GraphQLModule.forRoot({
            driver: ApolloDriver,
            installSubscriptionHandlers: true,
            autoSchemaFile: process.env.VERCEL_ENV ? true : 'schema.gql',
            debug: true,
            introspection: true,
            playground: true,
            tracing: true,
            context: ({ req }) => ({ req, prisma }),
        }),
    ],
    controllers: [AppController],
    providers: [...crudResolvers, ...relationResolvers] as unknown as Provider<any>[],
})
export class AppModule {}

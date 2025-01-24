import { Module, Provider } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaClient } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';
import { CreateOneUserArgs, UserCrudResolver, crudResolvers, relationResolvers } from './dal';
import { setTransformArgsIntoPrismaArgs } from './dal/helpers';
import { RecipesModule } from './recipes/recipes.module';
import { ApolloDriver } from '@nestjs/apollo';

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
            autoSchemaFile: 'schema.gql',
            debug: true,
            playground: true,
            tracing: true,
            context: ({ req }) => ({ req, prisma }),
        }),
    ],
    providers: [...crudResolvers, ...relationResolvers] as unknown as Provider<any>[],
})
export class AppModule {}

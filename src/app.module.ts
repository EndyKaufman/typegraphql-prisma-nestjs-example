import { Module, Provider } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaClient } from '@prisma/client';
import { crudResolvers, resolvers } from './dal';
import { RecipesModule } from './recipes/recipes.module';

const prisma = new PrismaClient({
    log: ['query'],
});

@Module({
    imports: [
        RecipesModule,
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            autoSchemaFile: 'schema.gql',
            debug: true,
            playground: true,
            tracing: true,
            context: ({ req }) => ({ req, prisma }),
        }),
    ],
    providers: (crudResolvers as unknown) as Provider<any>[],
})
export class AppModule {}

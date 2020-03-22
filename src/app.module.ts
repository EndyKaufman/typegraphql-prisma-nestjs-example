import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { PrismaClient } from "@prisma/client";
import { CrudResolversModule } from "./dal";
import { RecipesModule } from "./recipes/recipes.module";

const prisma = new PrismaClient({
  debug: true,
  log: ["query"]
});

@Module({
  imports: [
    RecipesModule,
    CrudResolversModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: "schema.gql",
      debug: true,
      playground: true,
      tracing: true,
      context: ({ req }) => ({ req, prisma })
    })
  ]
})
export class AppModule {}

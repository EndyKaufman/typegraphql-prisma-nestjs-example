import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@InputType("PermissionUpdateManyMutationInput", {
  isAbstract: true
})
export class PermissionUpdateManyMutationInput {
  @Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;
}

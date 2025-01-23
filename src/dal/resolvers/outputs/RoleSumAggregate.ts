import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("RoleSumAggregate", {
  isAbstract: true
})
export class RoleSumAggregate {
  @Field(_type => Int, {
    nullable: true
  })
  id!: number | null;
}

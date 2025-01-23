import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("RoleAvgAggregate", {
  isAbstract: true
})
export class RoleAvgAggregate {
  @Field(_type => Float, {
    nullable: true
  })
  id!: number | null;
}

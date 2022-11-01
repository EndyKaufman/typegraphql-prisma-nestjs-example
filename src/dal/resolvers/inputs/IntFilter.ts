import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedIntFilter } from "../inputs/NestedIntFilter";

@InputType("IntFilter", {
  isAbstract: true
})
export class IntFilter {
  @Field(_type => Int, {
    nullable: true
  })
  equals?: number | undefined;

  @Field(_type => [Int], {
    nullable: true
  })
  in?: number[] | undefined;

  @Field(_type => [Int], {
    nullable: true
  })
  notIn?: number[] | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  lt?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  lte?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  gt?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  gte?: number | undefined;

  @Field(_type => NestedIntFilter, {
    nullable: true
  })
  not?: NestedIntFilter | undefined;
}

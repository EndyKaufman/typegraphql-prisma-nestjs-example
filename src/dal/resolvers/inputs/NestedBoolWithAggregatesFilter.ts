import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedBoolFilter } from "../inputs/NestedBoolFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";

@InputType("NestedBoolWithAggregatesFilter", {
  isAbstract: true
})
export class NestedBoolWithAggregatesFilter {
  @Field(_type => Boolean, {
    nullable: true
  })
  equals?: boolean | undefined;

  @Field(_type => NestedBoolWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedBoolWithAggregatesFilter | undefined;

  @Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @Field(_type => NestedBoolFilter, {
    nullable: true
  })
  _min?: NestedBoolFilter | undefined;

  @Field(_type => NestedBoolFilter, {
    nullable: true
  })
  _max?: NestedBoolFilter | undefined;
}

import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedDateTimeFilter } from "../inputs/NestedDateTimeFilter";
import { NestedDateTimeWithAggregatesFilter } from "../inputs/NestedDateTimeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";

@InputType("DateTimeWithAggregatesFilter", {
  isAbstract: true
})
export class DateTimeWithAggregatesFilter {
  @Field(_type => Date, {
    nullable: true
  })
  equals?: Date | undefined;

  @Field(_type => [Date], {
    nullable: true
  })
  in?: Date[] | undefined;

  @Field(_type => [Date], {
    nullable: true
  })
  notIn?: Date[] | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  lt?: Date | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  lte?: Date | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  gt?: Date | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  gte?: Date | undefined;

  @Field(_type => NestedDateTimeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedDateTimeWithAggregatesFilter | undefined;

  @Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @Field(_type => NestedDateTimeFilter, {
    nullable: true
  })
  _min?: NestedDateTimeFilter | undefined;

  @Field(_type => NestedDateTimeFilter, {
    nullable: true
  })
  _max?: NestedDateTimeFilter | undefined;
}

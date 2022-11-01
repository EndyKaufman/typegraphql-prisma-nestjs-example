import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedDateTimeNullableFilter } from "../inputs/NestedDateTimeNullableFilter";

@InputType("DateTimeNullableFilter", {
  isAbstract: true
})
export class DateTimeNullableFilter {
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

  @Field(_type => NestedDateTimeNullableFilter, {
    nullable: true
  })
  not?: NestedDateTimeNullableFilter | undefined;
}

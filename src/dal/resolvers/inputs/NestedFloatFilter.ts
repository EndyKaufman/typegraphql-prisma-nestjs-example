import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@InputType("NestedFloatFilter", {
  isAbstract: true
})
export class NestedFloatFilter {
  @Field(_type => Float, {
    nullable: true
  })
  equals?: number | undefined;

  @Field(_type => [Float], {
    nullable: true
  })
  in?: number[] | undefined;

  @Field(_type => [Float], {
    nullable: true
  })
  notIn?: number[] | undefined;

  @Field(_type => Float, {
    nullable: true
  })
  lt?: number | undefined;

  @Field(_type => Float, {
    nullable: true
  })
  lte?: number | undefined;

  @Field(_type => Float, {
    nullable: true
  })
  gt?: number | undefined;

  @Field(_type => Float, {
    nullable: true
  })
  gte?: number | undefined;

  @Field(_type => NestedFloatFilter, {
    nullable: true
  })
  not?: NestedFloatFilter | undefined;
}

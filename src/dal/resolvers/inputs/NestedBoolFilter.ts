import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@InputType("NestedBoolFilter", {
  isAbstract: true
})
export class NestedBoolFilter {
  @Field(_type => Boolean, {
    nullable: true
  })
  equals?: boolean | undefined;

  @Field(_type => NestedBoolFilter, {
    nullable: true
  })
  not?: NestedBoolFilter | undefined;
}

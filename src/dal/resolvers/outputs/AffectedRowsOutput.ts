import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("AffectedRowsOutput", {
  isAbstract: true
})
export class AffectedRowsOutput {
  @Field(_type => Int, {
    nullable: false
  })
  count!: number;
}

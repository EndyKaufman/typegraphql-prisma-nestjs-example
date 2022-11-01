import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@InputType("NullableDateTimeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class NullableDateTimeFieldUpdateOperationsInput {
  @Field(_type => Date, {
    nullable: true
  })
  set?: Date | undefined;
}

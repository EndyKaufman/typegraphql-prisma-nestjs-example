import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@InputType("UserUpdateInput", {
  isAbstract: true
})
export class UserUpdateInput {
  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: NullableStringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  firstName?: NullableStringFieldUpdateOperationsInput | undefined;

  @Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  lastName?: NullableStringFieldUpdateOperationsInput | undefined;

  @Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  lastLogin?: DateTimeFieldUpdateOperationsInput | undefined;

  @Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isSuperuser?: BoolFieldUpdateOperationsInput | undefined;

  @Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isStaff?: BoolFieldUpdateOperationsInput | undefined;

  @Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isActive?: BoolFieldUpdateOperationsInput | undefined;

  @Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  dateJoined?: DateTimeFieldUpdateOperationsInput | undefined;

  @Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}

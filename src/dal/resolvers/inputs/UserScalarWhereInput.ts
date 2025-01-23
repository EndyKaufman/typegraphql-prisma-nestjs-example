import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@InputType("UserScalarWhereInput", {
  isAbstract: true
})
export class UserScalarWhereInput {
  @Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  AND?: UserScalarWhereInput[] | undefined;

  @Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  OR?: UserScalarWhereInput[] | undefined;

  @Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  NOT?: UserScalarWhereInput[] | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @Field(_type => StringNullableFilter, {
    nullable: true
  })
  username?: StringNullableFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @Field(_type => StringNullableFilter, {
    nullable: true
  })
  firstName?: StringNullableFilter | undefined;

  @Field(_type => StringNullableFilter, {
    nullable: true
  })
  lastName?: StringNullableFilter | undefined;

  @Field(_type => DateTimeFilter, {
    nullable: true
  })
  lastLogin?: DateTimeFilter | undefined;

  @Field(_type => BoolFilter, {
    nullable: true
  })
  isSuperuser?: BoolFilter | undefined;

  @Field(_type => BoolFilter, {
    nullable: true
  })
  isStaff?: BoolFilter | undefined;

  @Field(_type => BoolFilter, {
    nullable: true
  })
  isActive?: BoolFilter | undefined;

  @Field(_type => DateTimeFilter, {
    nullable: true
  })
  dateJoined?: DateTimeFilter | undefined;

  @Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  dateOfBirth?: DateTimeNullableFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  roleId?: IntFilter | undefined;
}

import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("UserScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UserScalarWhereWithAggregatesInput {
  @Field(_type => [UserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [UserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [UserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  email?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  username?: StringNullableWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  password?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  firstName?: StringNullableWithAggregatesFilter | undefined;

  @Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  lastName?: StringNullableWithAggregatesFilter | undefined;

  @Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  lastLogin?: DateTimeWithAggregatesFilter | undefined;

  @Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  isSuperuser?: BoolWithAggregatesFilter | undefined;

  @Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  isStaff?: BoolWithAggregatesFilter | undefined;

  @Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  isActive?: BoolWithAggregatesFilter | undefined;

  @Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  dateJoined?: DateTimeWithAggregatesFilter | undefined;

  @Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  dateOfBirth?: DateTimeNullableWithAggregatesFilter | undefined;
}

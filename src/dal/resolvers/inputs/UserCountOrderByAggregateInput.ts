import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";

@InputType("UserCountOrderByAggregateInput", {
  isAbstract: true
})
export class UserCountOrderByAggregateInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  username?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  firstName?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  lastName?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  lastLogin?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  isSuperuser?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  isStaff?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  isActive?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  dateJoined?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  dateOfBirth?: "asc" | "desc" | undefined;
}

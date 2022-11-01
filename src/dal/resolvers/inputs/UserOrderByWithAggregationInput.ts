import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserAvgOrderByAggregateInput } from "../inputs/UserAvgOrderByAggregateInput";
import { UserCountOrderByAggregateInput } from "../inputs/UserCountOrderByAggregateInput";
import { UserMaxOrderByAggregateInput } from "../inputs/UserMaxOrderByAggregateInput";
import { UserMinOrderByAggregateInput } from "../inputs/UserMinOrderByAggregateInput";
import { UserSumOrderByAggregateInput } from "../inputs/UserSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("UserOrderByWithAggregationInput", {
  isAbstract: true
})
export class UserOrderByWithAggregationInput {
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

  @Field(_type => UserCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserCountOrderByAggregateInput | undefined;

  @Field(_type => UserAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: UserAvgOrderByAggregateInput | undefined;

  @Field(_type => UserMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserMaxOrderByAggregateInput | undefined;

  @Field(_type => UserMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserMinOrderByAggregateInput | undefined;

  @Field(_type => UserSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: UserSumOrderByAggregateInput | undefined;
}

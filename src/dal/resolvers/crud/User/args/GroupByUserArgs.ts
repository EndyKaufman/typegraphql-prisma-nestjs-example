import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserOrderByWithAggregationInput } from "../../../inputs/UserOrderByWithAggregationInput";
import { UserScalarWhereWithAggregatesInput } from "../../../inputs/UserScalarWhereWithAggregatesInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserScalarFieldEnum } from "../../../../enums/UserScalarFieldEnum";

@ArgsType()
export class GroupByUserArgs {
  @Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @Field(_type => [UserOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserOrderByWithAggregationInput[] | undefined;

  @Field(_type => [UserScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "email" | "username" | "password" | "firstName" | "lastName" | "lastLogin" | "isSuperuser" | "isStaff" | "isActive" | "dateJoined" | "dateOfBirth">;

  @Field(_type => UserScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserScalarWhereWithAggregatesInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}

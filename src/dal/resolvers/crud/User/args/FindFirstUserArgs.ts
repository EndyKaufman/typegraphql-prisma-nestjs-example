import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserOrderByWithRelationInput } from "../../../inputs/UserOrderByWithRelationInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
import { UserScalarFieldEnum } from "../../../../enums/UserScalarFieldEnum";

@ArgsType()
export class FindFirstUserArgs {
  @Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @Field(_type => [UserOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UserOrderByWithRelationInput[] | undefined;

  @Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(_type => [UserScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "email" | "username" | "password" | "firstName" | "lastName" | "lastLogin" | "isSuperuser" | "isStaff" | "isActive" | "dateJoined" | "dateOfBirth"> | undefined;
}

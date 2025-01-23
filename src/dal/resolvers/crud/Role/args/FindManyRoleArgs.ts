import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RoleOrderByWithRelationInput } from "../../../inputs/RoleOrderByWithRelationInput";
import { RoleWhereInput } from "../../../inputs/RoleWhereInput";
import { RoleWhereUniqueInput } from "../../../inputs/RoleWhereUniqueInput";
import { RoleScalarFieldEnum } from "../../../../enums/RoleScalarFieldEnum";

@ArgsType()
export class FindManyRoleArgs {
  @Field(_type => RoleWhereInput, {
    nullable: true
  })
  where?: RoleWhereInput | undefined;

  @Field(_type => [RoleOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: RoleOrderByWithRelationInput[] | undefined;

  @Field(_type => RoleWhereUniqueInput, {
    nullable: true
  })
  cursor?: RoleWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(_type => [RoleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name"> | undefined;
}

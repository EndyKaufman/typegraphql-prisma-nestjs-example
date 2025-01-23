import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolePermissionsOrderByWithRelationInput } from "../../../inputs/RolePermissionsOrderByWithRelationInput";
import { RolePermissionsWhereInput } from "../../../inputs/RolePermissionsWhereInput";
import { RolePermissionsWhereUniqueInput } from "../../../inputs/RolePermissionsWhereUniqueInput";
import { RolePermissionsScalarFieldEnum } from "../../../../enums/RolePermissionsScalarFieldEnum";

@ArgsType()
export class FindFirstRolePermissionsArgs {
  @Field(_type => RolePermissionsWhereInput, {
    nullable: true
  })
  where?: RolePermissionsWhereInput | undefined;

  @Field(_type => [RolePermissionsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: RolePermissionsOrderByWithRelationInput[] | undefined;

  @Field(_type => RolePermissionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: RolePermissionsWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(_type => [RolePermissionsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "roleId" | "permissionId"> | undefined;
}

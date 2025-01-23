import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PermissionRelationFilter } from "../inputs/PermissionRelationFilter";
import { RolePermissionsRoleIdPermissionIdCompoundUniqueInput } from "../inputs/RolePermissionsRoleIdPermissionIdCompoundUniqueInput";
import { RolePermissionsWhereInput } from "../inputs/RolePermissionsWhereInput";
import { RoleRelationFilter } from "../inputs/RoleRelationFilter";

@InputType("RolePermissionsWhereUniqueInput", {
  isAbstract: true
})
export class RolePermissionsWhereUniqueInput {
  @Field(_type => Int, {
    nullable: true
  })
  id?: number | undefined;

  @Field(_type => RolePermissionsRoleIdPermissionIdCompoundUniqueInput, {
    nullable: true
  })
  roleId_permissionId?: RolePermissionsRoleIdPermissionIdCompoundUniqueInput | undefined;

  @Field(_type => [RolePermissionsWhereInput], {
    nullable: true
  })
  AND?: RolePermissionsWhereInput[] | undefined;

  @Field(_type => [RolePermissionsWhereInput], {
    nullable: true
  })
  OR?: RolePermissionsWhereInput[] | undefined;

  @Field(_type => [RolePermissionsWhereInput], {
    nullable: true
  })
  NOT?: RolePermissionsWhereInput[] | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  roleId?: IntFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  permissionId?: IntFilter | undefined;

  @Field(_type => RoleRelationFilter, {
    nullable: true
  })
  Role?: RoleRelationFilter | undefined;

  @Field(_type => PermissionRelationFilter, {
    nullable: true
  })
  Permission?: PermissionRelationFilter | undefined;
}

import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PermissionRelationFilter } from "../inputs/PermissionRelationFilter";
import { RoleRelationFilter } from "../inputs/RoleRelationFilter";

@InputType("RolePermissionsWhereInput", {
  isAbstract: true
})
export class RolePermissionsWhereInput {
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
  id?: IntFilter | undefined;

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

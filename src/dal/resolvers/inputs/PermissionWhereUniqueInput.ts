import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionWhereInput } from "../inputs/PermissionWhereInput";
import { RolePermissionsListRelationFilter } from "../inputs/RolePermissionsListRelationFilter";

@InputType("PermissionWhereUniqueInput", {
  isAbstract: true
})
export class PermissionWhereUniqueInput {
  @Field(_type => Int, {
    nullable: true
  })
  id?: number | undefined;

  @Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @Field(_type => [PermissionWhereInput], {
    nullable: true
  })
  AND?: PermissionWhereInput[] | undefined;

  @Field(_type => [PermissionWhereInput], {
    nullable: true
  })
  OR?: PermissionWhereInput[] | undefined;

  @Field(_type => [PermissionWhereInput], {
    nullable: true
  })
  NOT?: PermissionWhereInput[] | undefined;

  @Field(_type => RolePermissionsListRelationFilter, {
    nullable: true
  })
  RolePermissions?: RolePermissionsListRelationFilter | undefined;
}

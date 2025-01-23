import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { RolePermissionsListRelationFilter } from "../inputs/RolePermissionsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@InputType("PermissionWhereInput", {
  isAbstract: true
})
export class PermissionWhereInput {
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

  @Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @Field(_type => RolePermissionsListRelationFilter, {
    nullable: true
  })
  RolePermissions?: RolePermissionsListRelationFilter | undefined;
}

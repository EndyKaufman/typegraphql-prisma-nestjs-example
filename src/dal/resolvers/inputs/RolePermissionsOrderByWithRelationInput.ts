import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionOrderByWithRelationInput } from "../inputs/PermissionOrderByWithRelationInput";
import { RoleOrderByWithRelationInput } from "../inputs/RoleOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("RolePermissionsOrderByWithRelationInput", {
  isAbstract: true
})
export class RolePermissionsOrderByWithRelationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  roleId?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  permissionId?: "asc" | "desc" | undefined;

  @Field(_type => RoleOrderByWithRelationInput, {
    nullable: true
  })
  Role?: RoleOrderByWithRelationInput | undefined;

  @Field(_type => PermissionOrderByWithRelationInput, {
    nullable: true
  })
  Permission?: PermissionOrderByWithRelationInput | undefined;
}

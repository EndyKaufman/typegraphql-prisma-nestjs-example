import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCountRolePermissionsArgs } from "./args/PermissionCountRolePermissionsArgs";

@ObjectType("PermissionCount", {
  isAbstract: true
})
export class PermissionCount {
  RolePermissions!: number;

  @Field(_type => Int, {
    name: "RolePermissions",
    nullable: false
  })
  getRolePermissions(@Root() root: PermissionCount, @Args() args: PermissionCountRolePermissionsArgs): number {
    return root.RolePermissions;
  }
}

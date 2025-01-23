import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCountRolePermissionsArgs } from "./args/RoleCountRolePermissionsArgs";
import { RoleCountUserArgs } from "./args/RoleCountUserArgs";

@ObjectType("RoleCount", {
  isAbstract: true
})
export class RoleCount {
  User!: number;
  RolePermissions!: number;

  @Field(_type => Int, {
    name: "User",
    nullable: false
  })
  getUser(@Root() root: RoleCount, @Args() args: RoleCountUserArgs): number {
    return root.User;
  }

  @Field(_type => Int, {
    name: "RolePermissions",
    nullable: false
  })
  getRolePermissions(@Root() root: RoleCount, @Args() args: RoleCountRolePermissionsArgs): number {
    return root.RolePermissions;
  }
}

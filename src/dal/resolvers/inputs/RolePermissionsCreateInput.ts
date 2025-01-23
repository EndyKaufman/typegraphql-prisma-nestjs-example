import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateNestedOneWithoutRolePermissionsInput } from "../inputs/PermissionCreateNestedOneWithoutRolePermissionsInput";
import { RoleCreateNestedOneWithoutRolePermissionsInput } from "../inputs/RoleCreateNestedOneWithoutRolePermissionsInput";

@InputType("RolePermissionsCreateInput", {
  isAbstract: true
})
export class RolePermissionsCreateInput {
  @Field(_type => RoleCreateNestedOneWithoutRolePermissionsInput, {
    nullable: false
  })
  Role!: RoleCreateNestedOneWithoutRolePermissionsInput;

  @Field(_type => PermissionCreateNestedOneWithoutRolePermissionsInput, {
    nullable: false
  })
  Permission!: PermissionCreateNestedOneWithoutRolePermissionsInput;
}

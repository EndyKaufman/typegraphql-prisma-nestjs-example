import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum RolePermissionsScalarFieldEnum {
  id = "id",
  roleId = "roleId",
  permissionId = "permissionId"
}
registerEnumType(RolePermissionsScalarFieldEnum, {
  name: "RolePermissionsScalarFieldEnum",
  description: undefined,
});

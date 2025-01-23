import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum PermissionScalarFieldEnum {
  id = "id",
  name = "name"
}
registerEnumType(PermissionScalarFieldEnum, {
  name: "PermissionScalarFieldEnum",
  description: undefined,
});

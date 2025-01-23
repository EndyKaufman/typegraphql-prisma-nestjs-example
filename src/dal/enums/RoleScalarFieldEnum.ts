import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum RoleScalarFieldEnum {
  id = "id",
  name = "name"
}
registerEnumType(RoleScalarFieldEnum, {
  name: "RoleScalarFieldEnum",
  description: undefined,
});

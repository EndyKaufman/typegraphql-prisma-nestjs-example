import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolePermissionsWhereInput } from "../../inputs/RolePermissionsWhereInput";

@ArgsType()
export class PermissionCountRolePermissionsArgs {
  @Field(_type => RolePermissionsWhereInput, {
    nullable: true
  })
  where?: RolePermissionsWhereInput | undefined;
}

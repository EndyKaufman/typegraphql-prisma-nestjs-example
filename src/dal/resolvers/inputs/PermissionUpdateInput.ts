import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolePermissionsUpdateManyWithoutPermissionNestedInput } from "../inputs/RolePermissionsUpdateManyWithoutPermissionNestedInput";

@InputType("PermissionUpdateInput", {
  isAbstract: true
})
export class PermissionUpdateInput {
  @Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @Field(_type => RolePermissionsUpdateManyWithoutPermissionNestedInput, {
    nullable: true
  })
  RolePermissions?: RolePermissionsUpdateManyWithoutPermissionNestedInput | undefined;
}

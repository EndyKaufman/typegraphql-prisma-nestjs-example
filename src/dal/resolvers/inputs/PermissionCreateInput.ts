import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolePermissionsCreateNestedManyWithoutPermissionInput } from "../inputs/RolePermissionsCreateNestedManyWithoutPermissionInput";

@InputType("PermissionCreateInput", {
  isAbstract: true
})
export class PermissionCreateInput {
  @Field(_type => String, {
    nullable: false
  })
  name!: string;

  @Field(_type => RolePermissionsCreateNestedManyWithoutPermissionInput, {
    nullable: true
  })
  RolePermissions?: RolePermissionsCreateNestedManyWithoutPermissionInput | undefined;
}

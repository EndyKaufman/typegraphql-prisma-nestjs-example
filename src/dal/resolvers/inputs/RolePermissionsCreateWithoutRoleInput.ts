import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateNestedOneWithoutRolePermissionsInput } from "../inputs/PermissionCreateNestedOneWithoutRolePermissionsInput";

@InputType("RolePermissionsCreateWithoutRoleInput", {
  isAbstract: true
})
export class RolePermissionsCreateWithoutRoleInput {
  @Field(_type => PermissionCreateNestedOneWithoutRolePermissionsInput, {
    nullable: false
  })
  Permission!: PermissionCreateNestedOneWithoutRolePermissionsInput;
}

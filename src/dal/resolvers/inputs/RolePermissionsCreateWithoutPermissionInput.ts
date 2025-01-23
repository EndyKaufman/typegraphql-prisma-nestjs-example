import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateNestedOneWithoutRolePermissionsInput } from "../inputs/RoleCreateNestedOneWithoutRolePermissionsInput";

@InputType("RolePermissionsCreateWithoutPermissionInput", {
  isAbstract: true
})
export class RolePermissionsCreateWithoutPermissionInput {
  @Field(_type => RoleCreateNestedOneWithoutRolePermissionsInput, {
    nullable: false
  })
  Role!: RoleCreateNestedOneWithoutRolePermissionsInput;
}

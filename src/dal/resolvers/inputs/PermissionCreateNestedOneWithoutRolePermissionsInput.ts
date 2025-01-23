import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateWithoutRolePermissionsInput } from "../inputs/PermissionCreateWithoutRolePermissionsInput";
import { PermissionWhereUniqueInput } from "../inputs/PermissionWhereUniqueInput";

@InputType("PermissionCreateNestedOneWithoutRolePermissionsInput", {
  isAbstract: true
})
export class PermissionCreateNestedOneWithoutRolePermissionsInput {
  @Field(_type => PermissionCreateWithoutRolePermissionsInput, {
    nullable: true
  })
  create?: PermissionCreateWithoutRolePermissionsInput | undefined;

  @Field(_type => PermissionWhereUniqueInput, {
    nullable: true
  })
  connect?: PermissionWhereUniqueInput | undefined;
}

import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateWithoutRolePermissionsInput } from "../inputs/PermissionCreateWithoutRolePermissionsInput";
import { PermissionUpdateWithoutRolePermissionsInput } from "../inputs/PermissionUpdateWithoutRolePermissionsInput";
import { PermissionWhereInput } from "../inputs/PermissionWhereInput";

@InputType("PermissionUpsertWithoutRolePermissionsInput", {
  isAbstract: true
})
export class PermissionUpsertWithoutRolePermissionsInput {
  @Field(_type => PermissionUpdateWithoutRolePermissionsInput, {
    nullable: false
  })
  update!: PermissionUpdateWithoutRolePermissionsInput;

  @Field(_type => PermissionCreateWithoutRolePermissionsInput, {
    nullable: false
  })
  create!: PermissionCreateWithoutRolePermissionsInput;

  @Field(_type => PermissionWhereInput, {
    nullable: true
  })
  where?: PermissionWhereInput | undefined;
}

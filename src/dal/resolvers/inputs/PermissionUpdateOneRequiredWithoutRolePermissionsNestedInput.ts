import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateWithoutRolePermissionsInput } from "../inputs/PermissionCreateWithoutRolePermissionsInput";
import { PermissionUpdateToOneWithWhereWithoutRolePermissionsInput } from "../inputs/PermissionUpdateToOneWithWhereWithoutRolePermissionsInput";
import { PermissionWhereUniqueInput } from "../inputs/PermissionWhereUniqueInput";

@InputType("PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput", {
  isAbstract: true
})
export class PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput {
  @Field(_type => PermissionCreateWithoutRolePermissionsInput, {
    nullable: true
  })
  create?: PermissionCreateWithoutRolePermissionsInput | undefined;

  @Field(_type => PermissionWhereUniqueInput, {
    nullable: true
  })
  connect?: PermissionWhereUniqueInput | undefined;

  @Field(_type => PermissionUpdateToOneWithWhereWithoutRolePermissionsInput, {
    nullable: true
  })
  update?: PermissionUpdateToOneWithWhereWithoutRolePermissionsInput | undefined;
}

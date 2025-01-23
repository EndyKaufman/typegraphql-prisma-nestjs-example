import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput } from "../inputs/PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput";
import { RoleUpdateOneRequiredWithoutRolePermissionsNestedInput } from "../inputs/RoleUpdateOneRequiredWithoutRolePermissionsNestedInput";

@InputType("RolePermissionsUpdateInput", {
  isAbstract: true
})
export class RolePermissionsUpdateInput {
  @Field(_type => RoleUpdateOneRequiredWithoutRolePermissionsNestedInput, {
    nullable: true
  })
  Role?: RoleUpdateOneRequiredWithoutRolePermissionsNestedInput | undefined;

  @Field(_type => PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput, {
    nullable: true
  })
  Permission?: PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput | undefined;
}

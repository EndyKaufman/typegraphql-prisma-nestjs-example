import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput } from "../inputs/PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput";

@InputType("RolePermissionsUpdateWithoutRoleInput", {
  isAbstract: true
})
export class RolePermissionsUpdateWithoutRoleInput {
  @Field(_type => PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput, {
    nullable: true
  })
  Permission?: PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput | undefined;
}

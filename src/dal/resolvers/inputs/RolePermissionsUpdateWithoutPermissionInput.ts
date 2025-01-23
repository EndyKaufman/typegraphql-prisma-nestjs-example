import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleUpdateOneRequiredWithoutRolePermissionsNestedInput } from "../inputs/RoleUpdateOneRequiredWithoutRolePermissionsNestedInput";

@InputType("RolePermissionsUpdateWithoutPermissionInput", {
  isAbstract: true
})
export class RolePermissionsUpdateWithoutPermissionInput {
  @Field(_type => RoleUpdateOneRequiredWithoutRolePermissionsNestedInput, {
    nullable: true
  })
  Role?: RoleUpdateOneRequiredWithoutRolePermissionsNestedInput | undefined;
}

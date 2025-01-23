import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@InputType("RolePermissionsRoleIdPermissionIdCompoundUniqueInput", {
  isAbstract: true
})
export class RolePermissionsRoleIdPermissionIdCompoundUniqueInput {
  @Field(_type => Int, {
    nullable: false
  })
  roleId!: number;

  @Field(_type => Int, {
    nullable: false
  })
  permissionId!: number;
}

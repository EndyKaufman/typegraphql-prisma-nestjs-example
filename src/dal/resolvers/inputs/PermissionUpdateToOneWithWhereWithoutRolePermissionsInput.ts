import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionUpdateWithoutRolePermissionsInput } from "../inputs/PermissionUpdateWithoutRolePermissionsInput";
import { PermissionWhereInput } from "../inputs/PermissionWhereInput";

@InputType("PermissionUpdateToOneWithWhereWithoutRolePermissionsInput", {
  isAbstract: true
})
export class PermissionUpdateToOneWithWhereWithoutRolePermissionsInput {
  @Field(_type => PermissionWhereInput, {
    nullable: true
  })
  where?: PermissionWhereInput | undefined;

  @Field(_type => PermissionUpdateWithoutRolePermissionsInput, {
    nullable: false
  })
  data!: PermissionUpdateWithoutRolePermissionsInput;
}

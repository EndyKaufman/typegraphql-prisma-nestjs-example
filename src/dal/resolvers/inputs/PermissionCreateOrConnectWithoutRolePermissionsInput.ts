import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateWithoutRolePermissionsInput } from "../inputs/PermissionCreateWithoutRolePermissionsInput";
import { PermissionWhereUniqueInput } from "../inputs/PermissionWhereUniqueInput";

@InputType("PermissionCreateOrConnectWithoutRolePermissionsInput", {
  isAbstract: true
})
export class PermissionCreateOrConnectWithoutRolePermissionsInput {
  @Field(_type => PermissionWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionWhereUniqueInput;

  @Field(_type => PermissionCreateWithoutRolePermissionsInput, {
    nullable: false
  })
  create!: PermissionCreateWithoutRolePermissionsInput;
}

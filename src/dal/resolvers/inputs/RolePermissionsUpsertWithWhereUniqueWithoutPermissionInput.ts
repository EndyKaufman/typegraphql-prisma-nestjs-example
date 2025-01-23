import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolePermissionsCreateWithoutPermissionInput } from "../inputs/RolePermissionsCreateWithoutPermissionInput";
import { RolePermissionsUpdateWithoutPermissionInput } from "../inputs/RolePermissionsUpdateWithoutPermissionInput";
import { RolePermissionsWhereUniqueInput } from "../inputs/RolePermissionsWhereUniqueInput";

@InputType("RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput", {
  isAbstract: true
})
export class RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput {
  @Field(_type => RolePermissionsWhereUniqueInput, {
    nullable: false
  })
  where!: RolePermissionsWhereUniqueInput;

  @Field(_type => RolePermissionsUpdateWithoutPermissionInput, {
    nullable: false
  })
  update!: RolePermissionsUpdateWithoutPermissionInput;

  @Field(_type => RolePermissionsCreateWithoutPermissionInput, {
    nullable: false
  })
  create!: RolePermissionsCreateWithoutPermissionInput;
}

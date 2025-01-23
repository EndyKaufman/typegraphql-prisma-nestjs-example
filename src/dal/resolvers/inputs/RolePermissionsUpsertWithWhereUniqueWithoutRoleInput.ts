import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolePermissionsCreateWithoutRoleInput } from "../inputs/RolePermissionsCreateWithoutRoleInput";
import { RolePermissionsUpdateWithoutRoleInput } from "../inputs/RolePermissionsUpdateWithoutRoleInput";
import { RolePermissionsWhereUniqueInput } from "../inputs/RolePermissionsWhereUniqueInput";

@InputType("RolePermissionsUpsertWithWhereUniqueWithoutRoleInput", {
  isAbstract: true
})
export class RolePermissionsUpsertWithWhereUniqueWithoutRoleInput {
  @Field(_type => RolePermissionsWhereUniqueInput, {
    nullable: false
  })
  where!: RolePermissionsWhereUniqueInput;

  @Field(_type => RolePermissionsUpdateWithoutRoleInput, {
    nullable: false
  })
  update!: RolePermissionsUpdateWithoutRoleInput;

  @Field(_type => RolePermissionsCreateWithoutRoleInput, {
    nullable: false
  })
  create!: RolePermissionsCreateWithoutRoleInput;
}

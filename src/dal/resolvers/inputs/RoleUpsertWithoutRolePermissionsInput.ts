import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateWithoutRolePermissionsInput } from "../inputs/RoleCreateWithoutRolePermissionsInput";
import { RoleUpdateWithoutRolePermissionsInput } from "../inputs/RoleUpdateWithoutRolePermissionsInput";
import { RoleWhereInput } from "../inputs/RoleWhereInput";

@InputType("RoleUpsertWithoutRolePermissionsInput", {
  isAbstract: true
})
export class RoleUpsertWithoutRolePermissionsInput {
  @Field(_type => RoleUpdateWithoutRolePermissionsInput, {
    nullable: false
  })
  update!: RoleUpdateWithoutRolePermissionsInput;

  @Field(_type => RoleCreateWithoutRolePermissionsInput, {
    nullable: false
  })
  create!: RoleCreateWithoutRolePermissionsInput;

  @Field(_type => RoleWhereInput, {
    nullable: true
  })
  where?: RoleWhereInput | undefined;
}

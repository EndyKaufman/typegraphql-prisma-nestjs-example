import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolePermissionsCreateNestedManyWithoutRoleInput } from "../inputs/RolePermissionsCreateNestedManyWithoutRoleInput";

@InputType("RoleCreateWithoutUserInput", {
  isAbstract: true
})
export class RoleCreateWithoutUserInput {
  @Field(_type => String, {
    nullable: false
  })
  name!: string;

  @Field(_type => RolePermissionsCreateNestedManyWithoutRoleInput, {
    nullable: true
  })
  RolePermissions?: RolePermissionsCreateNestedManyWithoutRoleInput | undefined;
}

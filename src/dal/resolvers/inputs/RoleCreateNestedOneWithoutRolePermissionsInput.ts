import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateWithoutRolePermissionsInput } from "../inputs/RoleCreateWithoutRolePermissionsInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";

@InputType("RoleCreateNestedOneWithoutRolePermissionsInput", {
  isAbstract: true
})
export class RoleCreateNestedOneWithoutRolePermissionsInput {
  @Field(_type => RoleCreateWithoutRolePermissionsInput, {
    nullable: true
  })
  create?: RoleCreateWithoutRolePermissionsInput | undefined;

  @Field(_type => RoleWhereUniqueInput, {
    nullable: true
  })
  connect?: RoleWhereUniqueInput | undefined;
}

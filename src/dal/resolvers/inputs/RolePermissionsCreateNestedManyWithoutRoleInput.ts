import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolePermissionsCreateManyRoleInputEnvelope } from "../inputs/RolePermissionsCreateManyRoleInputEnvelope";
import { RolePermissionsCreateWithoutRoleInput } from "../inputs/RolePermissionsCreateWithoutRoleInput";
import { RolePermissionsWhereUniqueInput } from "../inputs/RolePermissionsWhereUniqueInput";

@InputType("RolePermissionsCreateNestedManyWithoutRoleInput", {
  isAbstract: true
})
export class RolePermissionsCreateNestedManyWithoutRoleInput {
  @Field(_type => [RolePermissionsCreateWithoutRoleInput], {
    nullable: true
  })
  create?: RolePermissionsCreateWithoutRoleInput[] | undefined;

  @Field(_type => RolePermissionsCreateManyRoleInputEnvelope, {
    nullable: true
  })
  createMany?: RolePermissionsCreateManyRoleInputEnvelope | undefined;

  @Field(_type => [RolePermissionsWhereUniqueInput], {
    nullable: true
  })
  connect?: RolePermissionsWhereUniqueInput[] | undefined;
}

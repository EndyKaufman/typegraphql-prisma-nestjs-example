import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolePermissionsCreateManyPermissionInputEnvelope } from "../inputs/RolePermissionsCreateManyPermissionInputEnvelope";
import { RolePermissionsCreateWithoutPermissionInput } from "../inputs/RolePermissionsCreateWithoutPermissionInput";
import { RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput } from "../inputs/RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput";
import { RolePermissionsWhereUniqueInput } from "../inputs/RolePermissionsWhereUniqueInput";

@InputType("RolePermissionsUpdateManyWithoutPermissionNestedInput", {
  isAbstract: true
})
export class RolePermissionsUpdateManyWithoutPermissionNestedInput {
  @Field(_type => [RolePermissionsCreateWithoutPermissionInput], {
    nullable: true
  })
  create?: RolePermissionsCreateWithoutPermissionInput[] | undefined;

  @Field(_type => RolePermissionsCreateManyPermissionInputEnvelope, {
    nullable: true
  })
  createMany?: RolePermissionsCreateManyPermissionInputEnvelope | undefined;

  @Field(_type => [RolePermissionsWhereUniqueInput], {
    nullable: true
  })
  delete?: RolePermissionsWhereUniqueInput[] | undefined;

  @Field(_type => [RolePermissionsWhereUniqueInput], {
    nullable: true
  })
  connect?: RolePermissionsWhereUniqueInput[] | undefined;

  @Field(_type => [RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput], {
    nullable: true
  })
  update?: RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput[] | undefined;
}

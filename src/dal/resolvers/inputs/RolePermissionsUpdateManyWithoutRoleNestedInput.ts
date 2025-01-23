import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolePermissionsCreateManyRoleInputEnvelope } from "../inputs/RolePermissionsCreateManyRoleInputEnvelope";
import { RolePermissionsCreateWithoutRoleInput } from "../inputs/RolePermissionsCreateWithoutRoleInput";
import { RolePermissionsUpdateWithWhereUniqueWithoutRoleInput } from "../inputs/RolePermissionsUpdateWithWhereUniqueWithoutRoleInput";
import { RolePermissionsWhereUniqueInput } from "../inputs/RolePermissionsWhereUniqueInput";

@InputType("RolePermissionsUpdateManyWithoutRoleNestedInput", {
  isAbstract: true
})
export class RolePermissionsUpdateManyWithoutRoleNestedInput {
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
  delete?: RolePermissionsWhereUniqueInput[] | undefined;

  @Field(_type => [RolePermissionsWhereUniqueInput], {
    nullable: true
  })
  connect?: RolePermissionsWhereUniqueInput[] | undefined;

  @Field(_type => [RolePermissionsUpdateWithWhereUniqueWithoutRoleInput], {
    nullable: true
  })
  update?: RolePermissionsUpdateWithWhereUniqueWithoutRoleInput[] | undefined;
}

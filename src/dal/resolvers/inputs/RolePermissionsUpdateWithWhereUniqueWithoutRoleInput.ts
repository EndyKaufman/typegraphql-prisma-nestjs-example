import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolePermissionsUpdateWithoutRoleInput } from "../inputs/RolePermissionsUpdateWithoutRoleInput";
import { RolePermissionsWhereUniqueInput } from "../inputs/RolePermissionsWhereUniqueInput";

@InputType("RolePermissionsUpdateWithWhereUniqueWithoutRoleInput", {
  isAbstract: true
})
export class RolePermissionsUpdateWithWhereUniqueWithoutRoleInput {
  @Field(_type => RolePermissionsWhereUniqueInput, {
    nullable: false
  })
  where!: RolePermissionsWhereUniqueInput;

  @Field(_type => RolePermissionsUpdateWithoutRoleInput, {
    nullable: false
  })
  data!: RolePermissionsUpdateWithoutRoleInput;
}

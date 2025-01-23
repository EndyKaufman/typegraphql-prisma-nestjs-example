import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolePermissionsCreateWithoutRoleInput } from "../inputs/RolePermissionsCreateWithoutRoleInput";
import { RolePermissionsWhereUniqueInput } from "../inputs/RolePermissionsWhereUniqueInput";

@InputType("RolePermissionsCreateOrConnectWithoutRoleInput", {
  isAbstract: true
})
export class RolePermissionsCreateOrConnectWithoutRoleInput {
  @Field(_type => RolePermissionsWhereUniqueInput, {
    nullable: false
  })
  where!: RolePermissionsWhereUniqueInput;

  @Field(_type => RolePermissionsCreateWithoutRoleInput, {
    nullable: false
  })
  create!: RolePermissionsCreateWithoutRoleInput;
}

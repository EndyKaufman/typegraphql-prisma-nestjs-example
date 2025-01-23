import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolePermissionsScalarWhereInput } from "../inputs/RolePermissionsScalarWhereInput";
import { RolePermissionsUpdateManyMutationInput } from "../inputs/RolePermissionsUpdateManyMutationInput";

@InputType("RolePermissionsUpdateManyWithWhereWithoutPermissionInput", {
  isAbstract: true
})
export class RolePermissionsUpdateManyWithWhereWithoutPermissionInput {
  @Field(_type => RolePermissionsScalarWhereInput, {
    nullable: false
  })
  where!: RolePermissionsScalarWhereInput;

  @Field(_type => RolePermissionsUpdateManyMutationInput, {
    nullable: false
  })
  data!: RolePermissionsUpdateManyMutationInput;
}

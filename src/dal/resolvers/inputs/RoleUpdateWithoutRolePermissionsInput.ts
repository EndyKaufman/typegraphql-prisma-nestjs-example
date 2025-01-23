import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateManyWithoutRoleNestedInput } from "../inputs/UserUpdateManyWithoutRoleNestedInput";

@InputType("RoleUpdateWithoutRolePermissionsInput", {
  isAbstract: true
})
export class RoleUpdateWithoutRolePermissionsInput {
  @Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @Field(_type => UserUpdateManyWithoutRoleNestedInput, {
    nullable: true
  })
  User?: UserUpdateManyWithoutRoleNestedInput | undefined;
}

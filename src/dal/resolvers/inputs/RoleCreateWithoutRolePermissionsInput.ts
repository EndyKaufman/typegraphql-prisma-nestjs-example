import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutRoleInput } from "../inputs/UserCreateNestedManyWithoutRoleInput";

@InputType("RoleCreateWithoutRolePermissionsInput", {
  isAbstract: true
})
export class RoleCreateWithoutRolePermissionsInput {
  @Field(_type => String, {
    nullable: false
  })
  name!: string;

  @Field(_type => UserCreateNestedManyWithoutRoleInput, {
    nullable: true
  })
  User?: UserCreateNestedManyWithoutRoleInput | undefined;
}

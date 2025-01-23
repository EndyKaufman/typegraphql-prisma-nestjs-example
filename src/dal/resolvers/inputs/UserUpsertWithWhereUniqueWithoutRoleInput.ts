import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutRoleInput } from "../inputs/UserCreateWithoutRoleInput";
import { UserUpdateWithoutRoleInput } from "../inputs/UserUpdateWithoutRoleInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserUpsertWithWhereUniqueWithoutRoleInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutRoleInput {
  @Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @Field(_type => UserUpdateWithoutRoleInput, {
    nullable: false
  })
  update!: UserUpdateWithoutRoleInput;

  @Field(_type => UserCreateWithoutRoleInput, {
    nullable: false
  })
  create!: UserCreateWithoutRoleInput;
}

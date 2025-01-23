import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutRoleInput } from "../inputs/UserUpdateWithoutRoleInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserUpdateWithWhereUniqueWithoutRoleInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutRoleInput {
  @Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @Field(_type => UserUpdateWithoutRoleInput, {
    nullable: false
  })
  data!: UserUpdateWithoutRoleInput;
}

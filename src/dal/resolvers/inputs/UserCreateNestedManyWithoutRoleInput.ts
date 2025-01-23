import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyRoleInputEnvelope } from "../inputs/UserCreateManyRoleInputEnvelope";
import { UserCreateWithoutRoleInput } from "../inputs/UserCreateWithoutRoleInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserCreateNestedManyWithoutRoleInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutRoleInput {
  @Field(_type => [UserCreateWithoutRoleInput], {
    nullable: true
  })
  create?: UserCreateWithoutRoleInput[] | undefined;

  @Field(_type => UserCreateManyRoleInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyRoleInputEnvelope | undefined;

  @Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}

import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyRoleInputEnvelope } from "../inputs/UserCreateManyRoleInputEnvelope";
import { UserCreateWithoutRoleInput } from "../inputs/UserCreateWithoutRoleInput";
import { UserUpdateWithWhereUniqueWithoutRoleInput } from "../inputs/UserUpdateWithWhereUniqueWithoutRoleInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@InputType("UserUpdateManyWithoutRoleNestedInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutRoleNestedInput {
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
  delete?: UserWhereUniqueInput[] | undefined;

  @Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @Field(_type => [UserUpdateWithWhereUniqueWithoutRoleInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutRoleInput[] | undefined;
}

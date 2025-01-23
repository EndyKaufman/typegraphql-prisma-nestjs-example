import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyMutationInput } from "../inputs/UserUpdateManyMutationInput";

@InputType("UserUpdateManyWithWhereWithoutRoleInput", {
  isAbstract: true
})
export class UserUpdateManyWithWhereWithoutRoleInput {
  @Field(_type => UserScalarWhereInput, {
    nullable: false
  })
  where!: UserScalarWhereInput;

  @Field(_type => UserUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserUpdateManyMutationInput;
}

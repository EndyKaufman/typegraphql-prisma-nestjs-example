import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserUpdateManyMutationInput } from "../../../inputs/UserUpdateManyMutationInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";

@ArgsType()
export class UpdateManyUserArgs {
  @Field(_type => UserUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserUpdateManyMutationInput;

  @Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}

import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserCreateInput } from "../../../inputs/UserCreateInput";

@ArgsType()
export class CreateOneUserArgs {
  @Field(_type => UserCreateInput, {
    nullable: false
  })
  data!: UserCreateInput;
}

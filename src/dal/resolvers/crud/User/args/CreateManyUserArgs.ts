import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserCreateManyInput } from "../../../inputs/UserCreateManyInput";

@ArgsType()
export class CreateManyUserArgs {
  @Field(_type => [UserCreateManyInput], {
    nullable: false
  })
  data!: UserCreateManyInput[];
}

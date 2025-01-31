import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";

@ArgsType()
export class DeleteOneUserArgs {
  @Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;
}

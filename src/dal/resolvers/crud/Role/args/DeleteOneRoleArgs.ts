import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RoleWhereUniqueInput } from "../../../inputs/RoleWhereUniqueInput";

@ArgsType()
export class DeleteOneRoleArgs {
  @Field(_type => RoleWhereUniqueInput, {
    nullable: false
  })
  where!: RoleWhereUniqueInput;
}

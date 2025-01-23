import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RoleCreateInput } from "../../../inputs/RoleCreateInput";

@ArgsType()
export class CreateOneRoleArgs {
  @Field(_type => RoleCreateInput, {
    nullable: false
  })
  data!: RoleCreateInput;
}

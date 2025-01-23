import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RoleCreateInput } from "../../../inputs/RoleCreateInput";
import { RoleUpdateInput } from "../../../inputs/RoleUpdateInput";
import { RoleWhereUniqueInput } from "../../../inputs/RoleWhereUniqueInput";

@ArgsType()
export class UpsertOneRoleArgs {
  @Field(_type => RoleWhereUniqueInput, {
    nullable: false
  })
  where!: RoleWhereUniqueInput;

  @Field(_type => RoleCreateInput, {
    nullable: false
  })
  create!: RoleCreateInput;

  @Field(_type => RoleUpdateInput, {
    nullable: false
  })
  update!: RoleUpdateInput;
}

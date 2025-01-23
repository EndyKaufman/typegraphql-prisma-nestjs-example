import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionCreateInput } from "../../../inputs/PermissionCreateInput";
import { PermissionUpdateInput } from "../../../inputs/PermissionUpdateInput";
import { PermissionWhereUniqueInput } from "../../../inputs/PermissionWhereUniqueInput";

@ArgsType()
export class UpsertOnePermissionArgs {
  @Field(_type => PermissionWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionWhereUniqueInput;

  @Field(_type => PermissionCreateInput, {
    nullable: false
  })
  create!: PermissionCreateInput;

  @Field(_type => PermissionUpdateInput, {
    nullable: false
  })
  update!: PermissionUpdateInput;
}

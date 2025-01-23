import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolePermissionsCreateInput } from "../../../inputs/RolePermissionsCreateInput";
import { RolePermissionsUpdateInput } from "../../../inputs/RolePermissionsUpdateInput";
import { RolePermissionsWhereUniqueInput } from "../../../inputs/RolePermissionsWhereUniqueInput";

@ArgsType()
export class UpsertOneRolePermissionsArgs {
  @Field(_type => RolePermissionsWhereUniqueInput, {
    nullable: false
  })
  where!: RolePermissionsWhereUniqueInput;

  @Field(_type => RolePermissionsCreateInput, {
    nullable: false
  })
  create!: RolePermissionsCreateInput;

  @Field(_type => RolePermissionsUpdateInput, {
    nullable: false
  })
  update!: RolePermissionsUpdateInput;
}

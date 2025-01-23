import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolePermissionsUpdateInput } from "../../../inputs/RolePermissionsUpdateInput";
import { RolePermissionsWhereUniqueInput } from "../../../inputs/RolePermissionsWhereUniqueInput";

@ArgsType()
export class UpdateOneRolePermissionsArgs {
  @Field(_type => RolePermissionsUpdateInput, {
    nullable: false
  })
  data!: RolePermissionsUpdateInput;

  @Field(_type => RolePermissionsWhereUniqueInput, {
    nullable: false
  })
  where!: RolePermissionsWhereUniqueInput;
}

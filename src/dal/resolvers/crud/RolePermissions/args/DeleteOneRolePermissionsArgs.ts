import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolePermissionsWhereUniqueInput } from "../../../inputs/RolePermissionsWhereUniqueInput";

@ArgsType()
export class DeleteOneRolePermissionsArgs {
  @Field(_type => RolePermissionsWhereUniqueInput, {
    nullable: false
  })
  where!: RolePermissionsWhereUniqueInput;
}

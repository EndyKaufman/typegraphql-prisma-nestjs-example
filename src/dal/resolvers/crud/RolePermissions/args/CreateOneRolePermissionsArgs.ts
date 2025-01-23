import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RolePermissionsCreateInput } from "../../../inputs/RolePermissionsCreateInput";

@ArgsType()
export class CreateOneRolePermissionsArgs {
  @Field(_type => RolePermissionsCreateInput, {
    nullable: false
  })
  data!: RolePermissionsCreateInput;
}

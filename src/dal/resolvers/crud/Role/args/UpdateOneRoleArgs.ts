import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RoleUpdateInput } from "../../../inputs/RoleUpdateInput";
import { RoleWhereUniqueInput } from "../../../inputs/RoleWhereUniqueInput";

@ArgsType()
export class UpdateOneRoleArgs {
  @Field(_type => RoleUpdateInput, {
    nullable: false
  })
  data!: RoleUpdateInput;

  @Field(_type => RoleWhereUniqueInput, {
    nullable: false
  })
  where!: RoleWhereUniqueInput;
}

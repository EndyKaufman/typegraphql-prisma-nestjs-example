import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionCreateInput } from "../../../inputs/PermissionCreateInput";

@ArgsType()
export class CreateOnePermissionArgs {
  @Field(_type => PermissionCreateInput, {
    nullable: false
  })
  data!: PermissionCreateInput;
}

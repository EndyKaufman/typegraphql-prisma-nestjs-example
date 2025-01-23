import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionOrderByWithRelationInput } from "../../../inputs/PermissionOrderByWithRelationInput";
import { PermissionWhereInput } from "../../../inputs/PermissionWhereInput";
import { PermissionWhereUniqueInput } from "../../../inputs/PermissionWhereUniqueInput";
import { PermissionScalarFieldEnum } from "../../../../enums/PermissionScalarFieldEnum";

@ArgsType()
export class FindManyPermissionArgs {
  @Field(_type => PermissionWhereInput, {
    nullable: true
  })
  where?: PermissionWhereInput | undefined;

  @Field(_type => [PermissionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PermissionOrderByWithRelationInput[] | undefined;

  @Field(_type => PermissionWhereUniqueInput, {
    nullable: true
  })
  cursor?: PermissionWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(_type => [PermissionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name"> | undefined;
}

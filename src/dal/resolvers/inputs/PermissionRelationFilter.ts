import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionWhereInput } from "../inputs/PermissionWhereInput";

@InputType("PermissionRelationFilter", {
  isAbstract: true
})
export class PermissionRelationFilter {
  @Field(_type => PermissionWhereInput, {
    nullable: true
  })
  is?: PermissionWhereInput | undefined;

  @Field(_type => PermissionWhereInput, {
    nullable: true
  })
  isNot?: PermissionWhereInput | undefined;
}

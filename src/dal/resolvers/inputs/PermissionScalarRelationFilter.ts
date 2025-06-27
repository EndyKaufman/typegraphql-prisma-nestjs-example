import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionWhereInput } from "../inputs/PermissionWhereInput";

@InputType("PermissionScalarRelationFilter", {
  isAbstract: true
})
export class PermissionScalarRelationFilter {
  @Field(_type => PermissionWhereInput, {
    nullable: true
  })
  is?: PermissionWhereInput | undefined;

  @Field(_type => PermissionWhereInput, {
    nullable: true
  })
  isNot?: PermissionWhereInput | undefined;
}

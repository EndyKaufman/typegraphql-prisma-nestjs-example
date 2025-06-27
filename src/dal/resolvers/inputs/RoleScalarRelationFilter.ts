import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleWhereInput } from "../inputs/RoleWhereInput";

@InputType("RoleScalarRelationFilter", {
  isAbstract: true
})
export class RoleScalarRelationFilter {
  @Field(_type => RoleWhereInput, {
    nullable: true
  })
  is?: RoleWhereInput | undefined;

  @Field(_type => RoleWhereInput, {
    nullable: true
  })
  isNot?: RoleWhereInput | undefined;
}

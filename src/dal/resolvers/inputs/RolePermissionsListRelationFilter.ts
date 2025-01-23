import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolePermissionsWhereInput } from "../inputs/RolePermissionsWhereInput";

@InputType("RolePermissionsListRelationFilter", {
  isAbstract: true
})
export class RolePermissionsListRelationFilter {
  @Field(_type => RolePermissionsWhereInput, {
    nullable: true
  })
  every?: RolePermissionsWhereInput | undefined;

  @Field(_type => RolePermissionsWhereInput, {
    nullable: true
  })
  some?: RolePermissionsWhereInput | undefined;

  @Field(_type => RolePermissionsWhereInput, {
    nullable: true
  })
  none?: RolePermissionsWhereInput | undefined;
}

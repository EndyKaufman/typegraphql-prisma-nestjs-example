import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolePermissionsOrderByRelationAggregateInput } from "../inputs/RolePermissionsOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("PermissionOrderByWithRelationInput", {
  isAbstract: true
})
export class PermissionOrderByWithRelationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @Field(_type => RolePermissionsOrderByRelationAggregateInput, {
    nullable: true
  })
  RolePermissions?: RolePermissionsOrderByRelationAggregateInput | undefined;
}

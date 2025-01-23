import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@InputType("RolePermissionsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class RolePermissionsScalarWhereWithAggregatesInput {
  @Field(_type => [RolePermissionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RolePermissionsScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [RolePermissionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RolePermissionsScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [RolePermissionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RolePermissionsScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  roleId?: IntWithAggregatesFilter | undefined;

  @Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  permissionId?: IntWithAggregatesFilter | undefined;
}

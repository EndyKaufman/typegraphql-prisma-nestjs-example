import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("PermissionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class PermissionScalarWhereWithAggregatesInput {
  @Field(_type => [PermissionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PermissionScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [PermissionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PermissionScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [PermissionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PermissionScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}

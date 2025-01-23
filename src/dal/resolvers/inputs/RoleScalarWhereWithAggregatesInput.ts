import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("RoleScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class RoleScalarWhereWithAggregatesInput {
  @Field(_type => [RoleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: RoleScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [RoleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: RoleScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [RoleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: RoleScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}

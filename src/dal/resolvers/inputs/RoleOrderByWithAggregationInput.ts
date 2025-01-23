import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleAvgOrderByAggregateInput } from "../inputs/RoleAvgOrderByAggregateInput";
import { RoleCountOrderByAggregateInput } from "../inputs/RoleCountOrderByAggregateInput";
import { RoleMaxOrderByAggregateInput } from "../inputs/RoleMaxOrderByAggregateInput";
import { RoleMinOrderByAggregateInput } from "../inputs/RoleMinOrderByAggregateInput";
import { RoleSumOrderByAggregateInput } from "../inputs/RoleSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("RoleOrderByWithAggregationInput", {
  isAbstract: true
})
export class RoleOrderByWithAggregationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @Field(_type => RoleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RoleCountOrderByAggregateInput | undefined;

  @Field(_type => RoleAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: RoleAvgOrderByAggregateInput | undefined;

  @Field(_type => RoleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RoleMaxOrderByAggregateInput | undefined;

  @Field(_type => RoleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RoleMinOrderByAggregateInput | undefined;

  @Field(_type => RoleSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: RoleSumOrderByAggregateInput | undefined;
}

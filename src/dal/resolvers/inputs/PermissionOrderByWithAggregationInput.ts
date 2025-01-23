import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionAvgOrderByAggregateInput } from "../inputs/PermissionAvgOrderByAggregateInput";
import { PermissionCountOrderByAggregateInput } from "../inputs/PermissionCountOrderByAggregateInput";
import { PermissionMaxOrderByAggregateInput } from "../inputs/PermissionMaxOrderByAggregateInput";
import { PermissionMinOrderByAggregateInput } from "../inputs/PermissionMinOrderByAggregateInput";
import { PermissionSumOrderByAggregateInput } from "../inputs/PermissionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("PermissionOrderByWithAggregationInput", {
  isAbstract: true
})
export class PermissionOrderByWithAggregationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @Field(_type => PermissionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PermissionCountOrderByAggregateInput | undefined;

  @Field(_type => PermissionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PermissionAvgOrderByAggregateInput | undefined;

  @Field(_type => PermissionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PermissionMaxOrderByAggregateInput | undefined;

  @Field(_type => PermissionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PermissionMinOrderByAggregateInput | undefined;

  @Field(_type => PermissionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PermissionSumOrderByAggregateInput | undefined;
}

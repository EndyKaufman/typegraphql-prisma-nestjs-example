import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolePermissionsAvgOrderByAggregateInput } from "../inputs/RolePermissionsAvgOrderByAggregateInput";
import { RolePermissionsCountOrderByAggregateInput } from "../inputs/RolePermissionsCountOrderByAggregateInput";
import { RolePermissionsMaxOrderByAggregateInput } from "../inputs/RolePermissionsMaxOrderByAggregateInput";
import { RolePermissionsMinOrderByAggregateInput } from "../inputs/RolePermissionsMinOrderByAggregateInput";
import { RolePermissionsSumOrderByAggregateInput } from "../inputs/RolePermissionsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("RolePermissionsOrderByWithAggregationInput", {
  isAbstract: true
})
export class RolePermissionsOrderByWithAggregationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  roleId?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  permissionId?: "asc" | "desc" | undefined;

  @Field(_type => RolePermissionsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RolePermissionsCountOrderByAggregateInput | undefined;

  @Field(_type => RolePermissionsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: RolePermissionsAvgOrderByAggregateInput | undefined;

  @Field(_type => RolePermissionsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RolePermissionsMaxOrderByAggregateInput | undefined;

  @Field(_type => RolePermissionsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RolePermissionsMinOrderByAggregateInput | undefined;

  @Field(_type => RolePermissionsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: RolePermissionsSumOrderByAggregateInput | undefined;
}

import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionAvgAggregate } from "../outputs/PermissionAvgAggregate";
import { PermissionCountAggregate } from "../outputs/PermissionCountAggregate";
import { PermissionMaxAggregate } from "../outputs/PermissionMaxAggregate";
import { PermissionMinAggregate } from "../outputs/PermissionMinAggregate";
import { PermissionSumAggregate } from "../outputs/PermissionSumAggregate";

@ObjectType("PermissionGroupBy", {
  isAbstract: true
})
export class PermissionGroupBy {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => String, {
    nullable: false
  })
  name!: string;

  @Field(_type => PermissionCountAggregate, {
    nullable: true
  })
  _count!: PermissionCountAggregate | null;

  @Field(_type => PermissionAvgAggregate, {
    nullable: true
  })
  _avg!: PermissionAvgAggregate | null;

  @Field(_type => PermissionSumAggregate, {
    nullable: true
  })
  _sum!: PermissionSumAggregate | null;

  @Field(_type => PermissionMinAggregate, {
    nullable: true
  })
  _min!: PermissionMinAggregate | null;

  @Field(_type => PermissionMaxAggregate, {
    nullable: true
  })
  _max!: PermissionMaxAggregate | null;
}

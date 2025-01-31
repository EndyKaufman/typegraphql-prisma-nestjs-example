import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleAvgAggregate } from "../outputs/RoleAvgAggregate";
import { RoleCountAggregate } from "../outputs/RoleCountAggregate";
import { RoleMaxAggregate } from "../outputs/RoleMaxAggregate";
import { RoleMinAggregate } from "../outputs/RoleMinAggregate";
import { RoleSumAggregate } from "../outputs/RoleSumAggregate";

@ObjectType("RoleGroupBy", {
  isAbstract: true
})
export class RoleGroupBy {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => String, {
    nullable: false
  })
  name!: string;

  @Field(_type => RoleCountAggregate, {
    nullable: true
  })
  _count!: RoleCountAggregate | null;

  @Field(_type => RoleAvgAggregate, {
    nullable: true
  })
  _avg!: RoleAvgAggregate | null;

  @Field(_type => RoleSumAggregate, {
    nullable: true
  })
  _sum!: RoleSumAggregate | null;

  @Field(_type => RoleMinAggregate, {
    nullable: true
  })
  _min!: RoleMinAggregate | null;

  @Field(_type => RoleMaxAggregate, {
    nullable: true
  })
  _max!: RoleMaxAggregate | null;
}

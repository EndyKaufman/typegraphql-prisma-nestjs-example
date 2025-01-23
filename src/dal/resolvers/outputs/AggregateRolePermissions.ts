import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolePermissionsAvgAggregate } from "../outputs/RolePermissionsAvgAggregate";
import { RolePermissionsCountAggregate } from "../outputs/RolePermissionsCountAggregate";
import { RolePermissionsMaxAggregate } from "../outputs/RolePermissionsMaxAggregate";
import { RolePermissionsMinAggregate } from "../outputs/RolePermissionsMinAggregate";
import { RolePermissionsSumAggregate } from "../outputs/RolePermissionsSumAggregate";

@ObjectType("AggregateRolePermissions", {
  isAbstract: true
})
export class AggregateRolePermissions {
  @Field(_type => RolePermissionsCountAggregate, {
    nullable: true
  })
  _count!: RolePermissionsCountAggregate | null;

  @Field(_type => RolePermissionsAvgAggregate, {
    nullable: true
  })
  _avg!: RolePermissionsAvgAggregate | null;

  @Field(_type => RolePermissionsSumAggregate, {
    nullable: true
  })
  _sum!: RolePermissionsSumAggregate | null;

  @Field(_type => RolePermissionsMinAggregate, {
    nullable: true
  })
  _min!: RolePermissionsMinAggregate | null;

  @Field(_type => RolePermissionsMaxAggregate, {
    nullable: true
  })
  _max!: RolePermissionsMaxAggregate | null;
}

import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("RolePermissionsAvgAggregate", {
  isAbstract: true
})
export class RolePermissionsAvgAggregate {
  @Field(_type => Float, {
    nullable: true
  })
  id!: number | null;

  @Field(_type => Float, {
    nullable: true
  })
  roleId!: number | null;

  @Field(_type => Float, {
    nullable: true
  })
  permissionId!: number | null;
}

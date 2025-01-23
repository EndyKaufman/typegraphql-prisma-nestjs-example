import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("RolePermissionsSumAggregate", {
  isAbstract: true
})
export class RolePermissionsSumAggregate {
  @Field(_type => Int, {
    nullable: true
  })
  id!: number | null;

  @Field(_type => Int, {
    nullable: true
  })
  roleId!: number | null;

  @Field(_type => Int, {
    nullable: true
  })
  permissionId!: number | null;
}

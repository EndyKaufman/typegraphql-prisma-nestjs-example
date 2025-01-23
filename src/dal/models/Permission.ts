import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { RolePermissions } from "../models/RolePermissions";
import { PermissionCount } from "../resolvers/outputs/PermissionCount";

@ObjectType("Permission", {
  isAbstract: true
})
export class Permission {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => String, {
    nullable: false
  })
  name!: string;

  RolePermissions?: RolePermissions[];

  @Field(_type => PermissionCount, {
    nullable: true
  })
  _count?: PermissionCount | null;
}

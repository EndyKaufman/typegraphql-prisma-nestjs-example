import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { RolePermissions } from "../models/RolePermissions";
import { User } from "../models/User";
import { RoleCount } from "../resolvers/outputs/RoleCount";

@ObjectType("Role", {
  isAbstract: true
})
export class Role {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => String, {
    nullable: false
  })
  name!: string;

  User?: User[];

  RolePermissions?: RolePermissions[];

  @Field(_type => RoleCount, {
    nullable: true
  })
  _count?: RoleCount | null;
}

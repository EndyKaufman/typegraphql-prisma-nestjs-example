import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Permission } from "../../models/Permission";
import { Role } from "../../models/Role";

@ObjectType("CreateManyAndReturnRolePermissions", {
  isAbstract: true
})
export class CreateManyAndReturnRolePermissions {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => Int, {
    nullable: false
  })
  roleId!: number;

  @Field(_type => Int, {
    nullable: false
  })
  permissionId!: number;

  @Field(_type => Role, {
    nullable: false
  })
  Role!: Role;

  @Field(_type => Permission, {
    nullable: false
  })
  Permission!: Permission;
}

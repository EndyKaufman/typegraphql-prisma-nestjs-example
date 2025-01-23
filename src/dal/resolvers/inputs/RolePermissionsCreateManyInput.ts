import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@InputType("RolePermissionsCreateManyInput", {
  isAbstract: true
})
export class RolePermissionsCreateManyInput {
  @Field(_type => Int, {
    nullable: true
  })
  id?: number | undefined;

  @Field(_type => Int, {
    nullable: false
  })
  roleId!: number;

  @Field(_type => Int, {
    nullable: false
  })
  permissionId!: number;
}

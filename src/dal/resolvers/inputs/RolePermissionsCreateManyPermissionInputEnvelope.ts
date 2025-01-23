import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolePermissionsCreateManyPermissionInput } from "../inputs/RolePermissionsCreateManyPermissionInput";

@InputType("RolePermissionsCreateManyPermissionInputEnvelope", {
  isAbstract: true
})
export class RolePermissionsCreateManyPermissionInputEnvelope {
  @Field(_type => [RolePermissionsCreateManyPermissionInput], {
    nullable: false
  })
  data!: RolePermissionsCreateManyPermissionInput[];
}

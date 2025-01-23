import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolePermissionsCreateManyRoleInput } from "../inputs/RolePermissionsCreateManyRoleInput";

@InputType("RolePermissionsCreateManyRoleInputEnvelope", {
  isAbstract: true
})
export class RolePermissionsCreateManyRoleInputEnvelope {
  @Field(_type => [RolePermissionsCreateManyRoleInput], {
    nullable: false
  })
  data!: RolePermissionsCreateManyRoleInput[];
}

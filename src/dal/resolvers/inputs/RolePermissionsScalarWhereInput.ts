import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@InputType("RolePermissionsScalarWhereInput", {
  isAbstract: true
})
export class RolePermissionsScalarWhereInput {
  @Field(_type => [RolePermissionsScalarWhereInput], {
    nullable: true
  })
  AND?: RolePermissionsScalarWhereInput[] | undefined;

  @Field(_type => [RolePermissionsScalarWhereInput], {
    nullable: true
  })
  OR?: RolePermissionsScalarWhereInput[] | undefined;

  @Field(_type => [RolePermissionsScalarWhereInput], {
    nullable: true
  })
  NOT?: RolePermissionsScalarWhereInput[] | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  roleId?: IntFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  permissionId?: IntFilter | undefined;
}

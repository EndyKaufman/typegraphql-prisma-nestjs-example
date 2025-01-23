import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RolePermissionsListRelationFilter } from "../inputs/RolePermissionsListRelationFilter";
import { RoleWhereInput } from "../inputs/RoleWhereInput";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

@InputType("RoleWhereUniqueInput", {
  isAbstract: true
})
export class RoleWhereUniqueInput {
  @Field(_type => Int, {
    nullable: true
  })
  id?: number | undefined;

  @Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @Field(_type => [RoleWhereInput], {
    nullable: true
  })
  AND?: RoleWhereInput[] | undefined;

  @Field(_type => [RoleWhereInput], {
    nullable: true
  })
  OR?: RoleWhereInput[] | undefined;

  @Field(_type => [RoleWhereInput], {
    nullable: true
  })
  NOT?: RoleWhereInput[] | undefined;

  @Field(_type => UserListRelationFilter, {
    nullable: true
  })
  User?: UserListRelationFilter | undefined;

  @Field(_type => RolePermissionsListRelationFilter, {
    nullable: true
  })
  RolePermissions?: RolePermissionsListRelationFilter | undefined;
}

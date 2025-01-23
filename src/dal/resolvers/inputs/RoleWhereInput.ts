import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { RolePermissionsListRelationFilter } from "../inputs/RolePermissionsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

@InputType("RoleWhereInput", {
  isAbstract: true
})
export class RoleWhereInput {
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

  @Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @Field(_type => UserListRelationFilter, {
    nullable: true
  })
  User?: UserListRelationFilter | undefined;

  @Field(_type => RolePermissionsListRelationFilter, {
    nullable: true
  })
  RolePermissions?: RolePermissionsListRelationFilter | undefined;
}

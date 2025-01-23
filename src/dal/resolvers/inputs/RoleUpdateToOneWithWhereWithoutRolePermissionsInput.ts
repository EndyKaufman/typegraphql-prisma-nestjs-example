import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleUpdateWithoutRolePermissionsInput } from "../inputs/RoleUpdateWithoutRolePermissionsInput";
import { RoleWhereInput } from "../inputs/RoleWhereInput";

@InputType("RoleUpdateToOneWithWhereWithoutRolePermissionsInput", {
  isAbstract: true
})
export class RoleUpdateToOneWithWhereWithoutRolePermissionsInput {
  @Field(_type => RoleWhereInput, {
    nullable: true
  })
  where?: RoleWhereInput | undefined;

  @Field(_type => RoleUpdateWithoutRolePermissionsInput, {
    nullable: false
  })
  data!: RoleUpdateWithoutRolePermissionsInput;
}

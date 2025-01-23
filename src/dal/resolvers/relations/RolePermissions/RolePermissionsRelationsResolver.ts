import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Permission } from "../../../models/Permission";
import { Role } from "../../../models/Role";
import { RolePermissions } from "../../../models/RolePermissions";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => RolePermissions)
export class RolePermissionsRelationsResolver {
  @ResolveField(_type => Role, {
    nullable: false
  })
  async Role(@Root() rolePermissions: RolePermissions, @Context() ctx: any, @Info() info: GraphQLResolveInfo): Promise<Role> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'RolePermissions', '', '');
    return getPrismaFromContext(ctx).rolePermissions.findUniqueOrThrow({
      where: {
        id: rolePermissions.id,
      },
    }).Role({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'RolePermissions', '', '')),
    });
  }

  @ResolveField(_type => Permission, {
    nullable: false
  })
  async Permission(@Root() rolePermissions: RolePermissions, @Context() ctx: any, @Info() info: GraphQLResolveInfo): Promise<Permission> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'RolePermissions', '', '');
    return getPrismaFromContext(ctx).rolePermissions.findUniqueOrThrow({
      where: {
        id: rolePermissions.id,
      },
    }).Permission({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'RolePermissions', '', '')),
    });
  }
}

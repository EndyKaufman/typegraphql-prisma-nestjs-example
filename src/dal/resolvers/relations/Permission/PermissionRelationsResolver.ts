import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Permission } from "../../../models/Permission";
import { RolePermissions } from "../../../models/RolePermissions";
import { PermissionRolePermissionsArgs } from "./args/PermissionRolePermissionsArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Permission)
export class PermissionRelationsResolver {
  @ResolveField(_type => [RolePermissions], {
    nullable: false
  })
  async RolePermissions(@Root() permission: Permission, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: PermissionRolePermissionsArgs): Promise<RolePermissions[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Permission', '', '');
    return getPrismaFromContext(ctx).permission.findUniqueOrThrow({
      where: {
        id: permission.id,
      },
    }).RolePermissions({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Permission', '', '')),
    });
  }
}

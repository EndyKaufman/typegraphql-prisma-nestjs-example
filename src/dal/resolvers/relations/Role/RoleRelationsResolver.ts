import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Role } from "../../../models/Role";
import { RolePermissions } from "../../../models/RolePermissions";
import { User } from "../../../models/User";
import { RoleRolePermissionsArgs } from "./args/RoleRolePermissionsArgs";
import { RoleUserArgs } from "./args/RoleUserArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Role)
export class RoleRelationsResolver {
  @ResolveField(_type => [User], {
    nullable: false
  })
  async User(@Root() role: Role, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: RoleUserArgs): Promise<User[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Role', '', '');
    return getPrismaFromContext(ctx).role.findUniqueOrThrow({
      where: {
        id: role.id,
      },
    }).User({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Role', '', '')),
    });
  }

  @ResolveField(_type => [RolePermissions], {
    nullable: false
  })
  async RolePermissions(@Root() role: Role, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: RoleRolePermissionsArgs): Promise<RolePermissions[]> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'Role', '', '');
    return getPrismaFromContext(ctx).role.findUniqueOrThrow({
      where: {
        id: role.id,
      },
    }).RolePermissions({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'Role', '', '')),
    });
  }
}

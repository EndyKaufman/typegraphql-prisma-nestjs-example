import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Permission } from "../../../models/Permission";
import { RolePermissions } from "../../../models/RolePermissions";
import { PermissionRolePermissionsArgs } from "./args/PermissionRolePermissionsArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, InlineLoader } from "../../../helpers";
import * as DataLoader from "dataloader";

@Resolver(_of => Permission)
export class PermissionRelationsResolver {
  @ResolveField(_type => [RolePermissions], {
    nullable: false
  })
  async RolePermissions(@Root() permission: Permission, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: PermissionRolePermissionsArgs, @InlineLoader(<ID, Type>(context) => {
    const graphqlExecutionContext = GqlExecutionContext.create(context);
    const ctx = graphqlExecutionContext.getContext();
    const loader = new DataLoader<ID, Type>(
      async (ids) => {
        const context = (loader as any).context;
        const info = (loader as any).info;
        const args = (loader as any).args;
        const { _count } = transformInfoIntoPrismaArgs(info, 'Permission', 'permission', 'findMany');
        const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, context, 'Permission', 'permission', 'findMany', []);
        const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Permission', 'permission', 'findMany');
        const allArgs = { ...transformedArgsIntoPrismaArgs, ...otherArgs, };
        const result: RolePermissions[] = await getPrismaFromContext(ctx).rolePermissions.findMany({
          ...allArgs,
          where: {
            ...(allArgs.where || {}),
            permissionId: { in: ids },
          },
        });
        return ids.map(id => result.filter(r => r.permissionId === id) || []) as Type[]
      }, { cache: false, batchScheduleFn: (cb) => setTimeout(() => process.nextTick(cb), 100) }
    );
    return loader;
  }) dataloader: DataLoader<number, RolePermissions[]>): Promise<RolePermissions[]> {
    (dataloader as any).info = info;
    (dataloader as any).context = ctx;
    (dataloader as any).args = args;
    return await dataloader.load(permission.id);
  }
}

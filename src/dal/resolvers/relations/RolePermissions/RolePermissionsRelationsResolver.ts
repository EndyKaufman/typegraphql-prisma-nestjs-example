import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Permission } from "../../../models/Permission";
import { Role } from "../../../models/Role";
import { RolePermissions } from "../../../models/RolePermissions";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, InlineLoader } from "../../../helpers";
import * as DataLoader from "dataloader";

@Resolver(_of => RolePermissions)
export class RolePermissionsRelationsResolver {
  @ResolveField(_type => Role, {
    nullable: false
  })
  async Role(@Root() rolePermissions: RolePermissions, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @InlineLoader(<ID, Type>(context) => {
    const graphqlExecutionContext = GqlExecutionContext.create(context);
    const ctx = graphqlExecutionContext.getContext();
    const loader = new DataLoader<ID, Type>(
      async (ids) => {
        const context = (loader as any).context;
        const info = (loader as any).info;
        const args = (loader as any).args;
        const { _count } = transformInfoIntoPrismaArgs(info, 'RolePermissions', 'rolePermissions', 'findMany');
        const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, context, 'RolePermissions', 'rolePermissions', 'findMany', []);
        const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'RolePermissions', 'rolePermissions', 'findMany');
        const allArgs = { ...transformedArgsIntoPrismaArgs, ...otherArgs, };
        const result: Role[] = await getPrismaFromContext(ctx).role.findMany({
          ...allArgs,
          where: {
            ...(allArgs.where || {}),
            id: { in: ids },
          },
        });
        return ids.map(id => result.find(r => r.id === id) || null) as Type[]
      }, { cache: false, batchScheduleFn: (cb) => setTimeout(() => process.nextTick(cb), 100) }
    );
    return loader;
  }) dataloader: DataLoader<number, Role>): Promise<Role> {
    (dataloader as any).info = info;
    (dataloader as any).context = ctx;
    (dataloader as any).args = {};
    return await dataloader.load(rolePermissions.roleId);
  }

  @ResolveField(_type => Permission, {
    nullable: false
  })
  async Permission(@Root() rolePermissions: RolePermissions, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @InlineLoader(<ID, Type>(context) => {
    const graphqlExecutionContext = GqlExecutionContext.create(context);
    const ctx = graphqlExecutionContext.getContext();
    const loader = new DataLoader<ID, Type>(
      async (ids) => {
        const context = (loader as any).context;
        const info = (loader as any).info;
        const args = (loader as any).args;
        const { _count } = transformInfoIntoPrismaArgs(info, 'RolePermissions', 'rolePermissions', 'findMany');
        const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, context, 'RolePermissions', 'rolePermissions', 'findMany', []);
        const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'RolePermissions', 'rolePermissions', 'findMany');
        const allArgs = { ...transformedArgsIntoPrismaArgs, ...otherArgs, };
        const result: Permission[] = await getPrismaFromContext(ctx).permission.findMany({
          ...allArgs,
          where: {
            ...(allArgs.where || {}),
            id: { in: ids },
          },
        });
        return ids.map(id => result.find(r => r.id === id) || null) as Type[]
      }, { cache: false, batchScheduleFn: (cb) => setTimeout(() => process.nextTick(cb), 100) }
    );
    return loader;
  }) dataloader: DataLoader<number, Permission>): Promise<Permission> {
    (dataloader as any).info = info;
    (dataloader as any).context = ctx;
    (dataloader as any).args = {};
    return await dataloader.load(rolePermissions.permissionId);
  }
}

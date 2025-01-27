import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Role } from "../../../models/Role";
import { RolePermissions } from "../../../models/RolePermissions";
import { User } from "../../../models/User";
import { RoleRolePermissionsArgs } from "./args/RoleRolePermissionsArgs";
import { RoleUserArgs } from "./args/RoleUserArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, InlineLoader } from "../../../helpers";
import * as DataLoader from "dataloader";

@Resolver(_of => Role)
export class RoleRelationsResolver {
  @ResolveField(_type => [User], {
    nullable: false
  })
  async User(@Root() role: Role, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: RoleUserArgs, @InlineLoader(<ID, Type>(context) => {
    const graphqlExecutionContext = GqlExecutionContext.create(context);
    const ctx = graphqlExecutionContext.getContext();
    const loader = new DataLoader<ID, Type>(
      async (ids) => {
        const context = (loader as any).context;
        const info = (loader as any).info;
        const args = (loader as any).args;
        const { _count } = transformInfoIntoPrismaArgs(info, 'Role', 'role', 'findMany', true);
        const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, context, 'Role', 'role', 'findMany', [], true);
        const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Role', 'role', 'findMany', true);
        const allArgs = { ...transformedArgsIntoPrismaArgs, ...otherArgs, };
        const result: User[] = await getPrismaFromContext(ctx).user.findMany({
          ...allArgs,
          where: {
            ...(allArgs.where || {}),
            roleId: { in: ids },
          },
        });
        return ids.map(id => result.filter(r => r.roleId === id) || []) as Type[]
      }, { cache: false, batchScheduleFn: (cb) => setTimeout(() => process.nextTick(cb), 100) }
    );
    return loader;
  }) dataloader: DataLoader<number, User[]>): Promise<User[]> {
    (dataloader as any).info = info;
    (dataloader as any).context = ctx;
    (dataloader as any).args = args;
    return await dataloader.load(role.id);
  }

  @ResolveField(_type => [RolePermissions], {
    nullable: false
  })
  async RolePermissions(@Root() role: Role, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: RoleRolePermissionsArgs, @InlineLoader(<ID, Type>(context) => {
    const graphqlExecutionContext = GqlExecutionContext.create(context);
    const ctx = graphqlExecutionContext.getContext();
    const loader = new DataLoader<ID, Type>(
      async (ids) => {
        const context = (loader as any).context;
        const info = (loader as any).info;
        const args = (loader as any).args;
        const { _count } = transformInfoIntoPrismaArgs(info, 'Role', 'role', 'findMany', true);
        const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, context, 'Role', 'role', 'findMany', [], true);
        const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Role', 'role', 'findMany', true);
        const allArgs = { ...transformedArgsIntoPrismaArgs, ...otherArgs, };
        const result: RolePermissions[] = await getPrismaFromContext(ctx).rolePermissions.findMany({
          ...allArgs,
          where: {
            ...(allArgs.where || {}),
            roleId: { in: ids },
          },
        });
        return ids.map(id => result.filter(r => r.roleId === id) || []) as Type[]
      }, { cache: false, batchScheduleFn: (cb) => setTimeout(() => process.nextTick(cb), 100) }
    );
    return loader;
  }) dataloader: DataLoader<number, RolePermissions[]>): Promise<RolePermissions[]> {
    (dataloader as any).info = info;
    (dataloader as any).context = ctx;
    (dataloader as any).args = args;
    return await dataloader.load(role.id);
  }
}

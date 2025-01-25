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
  async RolePermissions(@Root() permission: Permission, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @InlineLoader(<ID, Type>(context) => {
    const graphqlExecutionContext = GqlExecutionContext.create(context);
    const ctx = graphqlExecutionContext.getContext();
    return new DataLoader<ID, Type>(
      async (ids) => {
        const result: RolePermissions[] = await getPrismaFromContext(ctx).rolePermissions.findMany({
          where: {
            permissionId: { in: ids },
          },
        });
        return ids.map(id => result.filter(r => r.id === id) || []) as Type[]
      }, { cache: false, batchScheduleFn: (cb) => setTimeout(() => process.nextTick(cb), 100) }
    )
  }) dataloader: DataLoader<number, RolePermissions[]>): Promise<RolePermissions[]> {
    return await dataloader.load(permission.id);
  }
}

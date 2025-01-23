import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneRolePermissionsArgs } from "./args/UpsertOneRolePermissionsArgs";
import { RolePermissions } from "../../../models/RolePermissions";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, InlineLoader } from "../../../helpers";

@Resolver(_of => RolePermissions)
export class UpsertOneRolePermissionsResolver {
  @Mutation(_returns => RolePermissions, {
    nullable: false
  })
  async upsertOneRolePermissions(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpsertOneRolePermissionsArgs): Promise<RolePermissions> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'RolePermissions', 'rolePermissions', 'upsert');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'RolePermissions', 'rolePermissions', 'upsert', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'RolePermissions', 'rolePermissions', 'upsert');
    const result = await getPrismaFromContext(ctx).rolePermissions.upsert({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }
}

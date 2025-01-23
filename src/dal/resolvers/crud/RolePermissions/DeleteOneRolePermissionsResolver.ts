import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneRolePermissionsArgs } from "./args/DeleteOneRolePermissionsArgs";
import { RolePermissions } from "../../../models/RolePermissions";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, InlineLoader } from "../../../helpers";

@Resolver(_of => RolePermissions)
export class DeleteOneRolePermissionsResolver {
  @Mutation(_returns => RolePermissions, {
    nullable: true
  })
  async deleteOneRolePermissions(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteOneRolePermissionsArgs): Promise<RolePermissions | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'RolePermissions', 'rolePermissions', 'delete');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'RolePermissions', 'rolePermissions', 'delete', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'RolePermissions', 'rolePermissions', 'delete');
    const result = await getPrismaFromContext(ctx).rolePermissions.delete({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }
}

import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyRolePermissionsArgs } from "./args/FindManyRolePermissionsArgs";
import { RolePermissions } from "../../../models/RolePermissions";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, InlineLoader } from "../../../helpers";

@Resolver(_of => RolePermissions)
export class FindManyRolePermissionsResolver {
  @Query(_returns => [RolePermissions], {
    nullable: false
  })
  async findManyRolePermissions(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyRolePermissionsArgs): Promise<RolePermissions[]> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'RolePermissions', 'rolePermissions', 'findMany');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'RolePermissions', 'rolePermissions', 'findMany', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'RolePermissions', 'rolePermissions', 'findMany');
    const result = await getPrismaFromContext(ctx).rolePermissions.findMany({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }
}

import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneRolePermissionsArgs } from "./args/CreateOneRolePermissionsArgs";
import { RolePermissions } from "../../../models/RolePermissions";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, InlineLoader } from "../../../helpers";

@Resolver(_of => RolePermissions)
export class CreateOneRolePermissionsResolver {
  @Mutation(_returns => RolePermissions, {
    nullable: false
  })
  async createOneRolePermissions(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateOneRolePermissionsArgs): Promise<RolePermissions> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'RolePermissions', 'rolePermissions', 'create');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'RolePermissions', 'rolePermissions', 'create', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'RolePermissions', 'rolePermissions', 'create');
    const result = await getPrismaFromContext(ctx).rolePermissions.create({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }
}

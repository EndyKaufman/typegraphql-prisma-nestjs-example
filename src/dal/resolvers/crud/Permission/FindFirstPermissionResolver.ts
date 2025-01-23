import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPermissionArgs } from "./args/FindFirstPermissionArgs";
import { Permission } from "../../../models/Permission";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, InlineLoader } from "../../../helpers";

@Resolver(_of => Permission)
export class FindFirstPermissionResolver {
  @Query(_returns => Permission, {
    nullable: true
  })
  async findFirstPermission(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstPermissionArgs): Promise<Permission | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'Permission', 'permission', 'findFirst');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'Permission', 'permission', 'findFirst', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Permission', 'permission', 'findFirst');
    const result = await getPrismaFromContext(ctx).permission.findFirst({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }
}

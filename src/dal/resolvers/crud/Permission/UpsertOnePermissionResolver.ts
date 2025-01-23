import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOnePermissionArgs } from "./args/UpsertOnePermissionArgs";
import { Permission } from "../../../models/Permission";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, InlineLoader } from "../../../helpers";

@Resolver(_of => Permission)
export class UpsertOnePermissionResolver {
  @Mutation(_returns => Permission, {
    nullable: false
  })
  async upsertOnePermission(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpsertOnePermissionArgs): Promise<Permission> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'Permission', 'permission', 'upsert');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'Permission', 'permission', 'upsert', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Permission', 'permission', 'upsert');
    const result = await getPrismaFromContext(ctx).permission.upsert({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }
}

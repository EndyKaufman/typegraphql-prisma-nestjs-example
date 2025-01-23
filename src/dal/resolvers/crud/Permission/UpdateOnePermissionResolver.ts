import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOnePermissionArgs } from "./args/UpdateOnePermissionArgs";
import { Permission } from "../../../models/Permission";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, InlineLoader } from "../../../helpers";

@Resolver(_of => Permission)
export class UpdateOnePermissionResolver {
  @Mutation(_returns => Permission, {
    nullable: true
  })
  async updateOnePermission(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateOnePermissionArgs): Promise<Permission | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'Permission', 'permission', 'update');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'Permission', 'permission', 'update', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Permission', 'permission', 'update');
    const result = await getPrismaFromContext(ctx).permission.update({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }
}

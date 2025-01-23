import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePermissionArgs } from "./args/DeleteOnePermissionArgs";
import { Permission } from "../../../models/Permission";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, InlineLoader } from "../../../helpers";

@Resolver(_of => Permission)
export class DeleteOnePermissionResolver {
  @Mutation(_returns => Permission, {
    nullable: true
  })
  async deleteOnePermission(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteOnePermissionArgs): Promise<Permission | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'Permission', 'permission', 'delete');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'Permission', 'permission', 'delete', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Permission', 'permission', 'delete');
    const result = await getPrismaFromContext(ctx).permission.delete({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }
}

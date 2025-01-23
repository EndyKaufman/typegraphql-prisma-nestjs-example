import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneRoleArgs } from "./args/UpdateOneRoleArgs";
import { Role } from "../../../models/Role";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, InlineLoader } from "../../../helpers";

@Resolver(_of => Role)
export class UpdateOneRoleResolver {
  @Mutation(_returns => Role, {
    nullable: true
  })
  async updateOneRole(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateOneRoleArgs): Promise<Role | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'Role', 'role', 'update');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'Role', 'role', 'update', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Role', 'role', 'update');
    const result = await getPrismaFromContext(ctx).role.update({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }
}

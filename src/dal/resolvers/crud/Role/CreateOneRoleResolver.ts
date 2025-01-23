import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneRoleArgs } from "./args/CreateOneRoleArgs";
import { Role } from "../../../models/Role";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, InlineLoader } from "../../../helpers";

@Resolver(_of => Role)
export class CreateOneRoleResolver {
  @Mutation(_returns => Role, {
    nullable: false
  })
  async createOneRole(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateOneRoleArgs): Promise<Role> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'Role', 'role', 'create');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'Role', 'role', 'create', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Role', 'role', 'create');
    const result = await getPrismaFromContext(ctx).role.create({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }
}

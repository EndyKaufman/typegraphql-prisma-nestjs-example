import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { User } from "../../../models/User";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, InlineLoader } from "../../../helpers";

@Resolver(_of => User)
export class FindManyUserResolver {
  @Query(_returns => [User], {
    nullable: false
  })
  async users(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyUserArgs): Promise<User[]> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findMany');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findMany', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findMany');
    const result = await getPrismaFromContext(ctx).user.findMany({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }
}

import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUserArgs } from "./args/FindFirstUserArgs";
import { User } from "../../../models/User";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, InlineLoader } from "../../../helpers";

@Resolver(_of => User)
export class FindFirstUserResolver {
  @Query(_returns => User, {
    nullable: true
  })
  async findFirstUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstUserArgs): Promise<User | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findFirst');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findFirst', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findFirst');
    const result = await getPrismaFromContext(ctx).user.findFirst({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }
}

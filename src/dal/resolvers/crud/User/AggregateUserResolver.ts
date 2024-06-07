import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserArgs } from "./args/AggregateUserArgs";
import { User } from "../../../models/User";
import { AggregateUser } from "../../outputs/AggregateUser";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => User)
export class AggregateUserResolver {
  @Query(_returns => AggregateUser, {
    nullable: false
  })
  async aggregateUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateUserArgs): Promise<AggregateUser> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'aggregate', afterProcessEvents);
    const transformedInfoIntoPrismaArgs = transformInfoIntoPrismaArgs(info, 'User', 'user', 'aggregate');
    const result = await getPrismaFromContext(ctx).user.aggregate({ ...transformedArgsIntoPrismaArgs, ...transformedInfoIntoPrismaArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }
}

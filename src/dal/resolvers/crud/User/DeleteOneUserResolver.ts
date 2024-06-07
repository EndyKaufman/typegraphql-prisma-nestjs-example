import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneUserArgs } from "./args/DeleteOneUserArgs";
import { User } from "../../../models/User";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => User)
export class DeleteOneUserResolver {
  @Mutation(_returns => User, {
    nullable: true
  })
  async deleteOneUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteOneUserArgs): Promise<User | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'delete');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'delete', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'delete');
    const result = await getPrismaFromContext(ctx).user.delete({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }
}

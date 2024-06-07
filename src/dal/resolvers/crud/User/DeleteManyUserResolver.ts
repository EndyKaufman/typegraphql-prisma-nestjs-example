import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyUserArgs } from "./args/DeleteManyUserArgs";
import { User } from "../../../models/User";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => User)
export class DeleteManyUserResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteManyUserArgs): Promise<AffectedRowsOutput> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'deleteMany');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'deleteMany', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'deleteMany');
    const result = await getPrismaFromContext(ctx).user.deleteMany({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }
}

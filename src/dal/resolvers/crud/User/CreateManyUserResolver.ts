import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyUserArgs } from "./args/CreateManyUserArgs";
import { User } from "../../../models/User";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => User)
export class CreateManyUserResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateManyUserArgs): Promise<AffectedRowsOutput> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'createMany');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'createMany', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'createMany');
    const result = await getPrismaFromContext(ctx).user.createMany({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }
}

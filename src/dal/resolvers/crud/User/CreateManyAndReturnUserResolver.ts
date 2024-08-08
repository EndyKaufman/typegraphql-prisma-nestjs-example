import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnUserArgs } from "./args/CreateManyAndReturnUserArgs";
import { User } from "../../../models/User";
import { CreateManyAndReturnUser } from "../../outputs/CreateManyAndReturnUser";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => User)
export class CreateManyAndReturnUserResolver {
  @Mutation(_returns => [CreateManyAndReturnUser], {
    nullable: false
  })
  async createManyAndReturnUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateManyAndReturnUserArgs): Promise<CreateManyAndReturnUser[]> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'createManyAndReturn');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'createManyAndReturn', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'createManyAndReturn');
    const result = await getPrismaFromContext(ctx).user.createManyAndReturn({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }
}

import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Role } from "../../../models/Role";
import { User } from "../../../models/User";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => User)
export class UserRelationsResolver {
  @ResolveField(_type => Role, {
    nullable: false
  })
  async Role(@Root() user: User, @Context() ctx: any, @Info() info: GraphQLResolveInfo): Promise<Role> {
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', '', '');
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      where: {
        id: user.id,
      },
    }).Role({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count, 'User', '', '')),
    });
  }
}

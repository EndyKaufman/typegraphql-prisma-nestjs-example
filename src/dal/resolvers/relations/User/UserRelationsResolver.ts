import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Role } from "../../../models/Role";
import { User } from "../../../models/User";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, InlineLoader } from "../../../helpers";
import * as DataLoader from "dataloader";

@Resolver(_of => User)
export class UserRelationsResolver {
  @ResolveField(_type => Role, {
    nullable: false
  })
  async Role(@Root() user: User, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @InlineLoader(<ID, Type>(context) => {
    const graphqlExecutionContext = GqlExecutionContext.create(context);
    const ctx = graphqlExecutionContext.getContext();
    return new DataLoader<ID, Type>(
      async (ids) => {
        const result: Role[] = await getPrismaFromContext(ctx).role.findMany({
          where: {
            id: { in: ids },
          },
        });
        return ids.map(id => result.find(r => r.id === id) || null) as Type[]
      }
    )
  }) dataloader: DataLoader<number, Role>): Promise<Role> {
    return await dataloader.load(user.roleId);
  }
}

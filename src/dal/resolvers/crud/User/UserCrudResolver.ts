import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserArgs } from "./args/AggregateUserArgs";
import { CreateOneUserArgs } from "./args/CreateOneUserArgs";
import { DeleteManyUserArgs } from "./args/DeleteManyUserArgs";
import { DeleteOneUserArgs } from "./args/DeleteOneUserArgs";
import { FindFirstUserArgs } from "./args/FindFirstUserArgs";
import { FindFirstUserOrThrowArgs } from "./args/FindFirstUserOrThrowArgs";
import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { FindUniqueUserArgs } from "./args/FindUniqueUserArgs";
import { FindUniqueUserOrThrowArgs } from "./args/FindUniqueUserOrThrowArgs";
import { GroupByUserArgs } from "./args/GroupByUserArgs";
import { UpdateManyUserArgs } from "./args/UpdateManyUserArgs";
import { UpdateOneUserArgs } from "./args/UpdateOneUserArgs";
import { UpsertOneUserArgs } from "./args/UpsertOneUserArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { User } from "../../../models/User";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUser } from "../../outputs/AggregateUser";
import { UserGroupBy } from "../../outputs/UserGroupBy";

@Resolver(_of => User)
export class UserCrudResolver {
  @Query(_returns => AggregateUser, {
    nullable: false
  })
  async aggregateUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateUserArgs): Promise<AggregateUser> {
    return getPrismaFromContext(ctx).user.aggregate({
      ...transformArgsIntoPrismaArgs(info, args, ctx),
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @Mutation(_returns => User, {
    nullable: false
  })
  async createOneUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateOneUserArgs): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.create({
      ...transformArgsIntoPrismaArgs(info, args, ctx),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteManyUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.deleteMany({
      ...transformArgsIntoPrismaArgs(info, args, ctx),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => User, {
    nullable: true
  })
  async deleteOneUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteOneUserArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.delete({
      ...transformArgsIntoPrismaArgs(info, args, ctx),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => User, {
    nullable: true
  })
  async findFirstUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstUserArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findFirst({
      ...transformArgsIntoPrismaArgs(info, args, ctx),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => User, {
    nullable: true
  })
  async findFirstUserOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstUserOrThrowArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findFirstOrThrow({
      ...transformArgsIntoPrismaArgs(info, args, ctx),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => [User], {
    nullable: false
  })
  async users(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyUserArgs): Promise<User[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findMany({
      ...transformArgsIntoPrismaArgs(info, args, ctx),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => User, {
    nullable: true
  })
  async user(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueUserArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findUnique({
      ...transformArgsIntoPrismaArgs(info, args, ctx),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => User, {
    nullable: true
  })
  async getUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueUserOrThrowArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      ...transformArgsIntoPrismaArgs(info, args, ctx),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => [UserGroupBy], {
    nullable: false
  })
  async groupByUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: GroupByUserArgs): Promise<UserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.groupBy({
      ...transformArgsIntoPrismaArgs(info, args, ctx),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateManyUserArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.updateMany({
      ...transformArgsIntoPrismaArgs(info, args, ctx),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => User, {
    nullable: true
  })
  async updateOneUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateOneUserArgs): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.update({
      ...transformArgsIntoPrismaArgs(info, args, ctx),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => User, {
    nullable: false
  })
  async upsertOneUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpsertOneUserArgs): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.upsert({
      ...transformArgsIntoPrismaArgs(info, args, ctx),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

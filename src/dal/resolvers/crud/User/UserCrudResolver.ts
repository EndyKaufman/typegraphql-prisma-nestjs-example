import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserArgs } from "./args/AggregateUserArgs";
import { CreateManyAndReturnUserArgs } from "./args/CreateManyAndReturnUserArgs";
import { CreateManyUserArgs } from "./args/CreateManyUserArgs";
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
import { CreateManyAndReturnUser } from "../../outputs/CreateManyAndReturnUser";
import { UserGroupBy } from "../../outputs/UserGroupBy";

@Resolver(_of => User)
export class UserCrudResolver {
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

  @Mutation(_returns => User, {
    nullable: false
  })
  async createOneUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateOneUserArgs): Promise<User> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'create');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'create', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'create');
    const result = await getPrismaFromContext(ctx).user.create({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

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

  @Query(_returns => User, {
    nullable: true
  })
  async findFirstUserOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstUserOrThrowArgs): Promise<User | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findFirstOrThrow');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findFirstOrThrow', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findFirstOrThrow');
    const result = await getPrismaFromContext(ctx).user.findFirstOrThrow({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

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

  @Query(_returns => User, {
    nullable: true
  })
  async user(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueUserArgs): Promise<User | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findUnique');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findUnique', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findUnique');
    const result = await getPrismaFromContext(ctx).user.findUnique({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Query(_returns => User, {
    nullable: true
  })
  async getUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueUserOrThrowArgs): Promise<User | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'findUniqueOrThrow');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'findUniqueOrThrow', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'findUniqueOrThrow');
    const result = await getPrismaFromContext(ctx).user.findUniqueOrThrow({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Query(_returns => [UserGroupBy], {
    nullable: false
  })
  async groupByUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: GroupByUserArgs): Promise<UserGroupBy[]> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'groupBy');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'groupBy', afterProcessEvents);
    const groupByArgs = Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null));
    const result = await getPrismaFromContext(ctx).user.groupBy({ ...transformedArgsIntoPrismaArgs, ...groupByArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateManyUserArgs): Promise<AffectedRowsOutput> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'updateMany');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'updateMany', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'updateMany');
    const result = await getPrismaFromContext(ctx).user.updateMany({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Mutation(_returns => User, {
    nullable: true
  })
  async updateOneUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateOneUserArgs): Promise<User | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'update');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'update', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'update');
    const result = await getPrismaFromContext(ctx).user.update({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Mutation(_returns => User, {
    nullable: false
  })
  async upsertOneUser(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpsertOneUserArgs): Promise<User> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'User', 'user', 'upsert');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'User', 'user', 'upsert', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'User', 'user', 'upsert');
    const result = await getPrismaFromContext(ctx).user.upsert({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }
}

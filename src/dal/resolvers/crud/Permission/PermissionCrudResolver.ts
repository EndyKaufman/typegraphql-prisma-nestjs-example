import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOnePermissionArgs } from "./args/CreateOnePermissionArgs";
import { DeleteOnePermissionArgs } from "./args/DeleteOnePermissionArgs";
import { FindFirstPermissionArgs } from "./args/FindFirstPermissionArgs";
import { FindFirstPermissionOrThrowArgs } from "./args/FindFirstPermissionOrThrowArgs";
import { FindManyPermissionArgs } from "./args/FindManyPermissionArgs";
import { UpdateOnePermissionArgs } from "./args/UpdateOnePermissionArgs";
import { UpsertOnePermissionArgs } from "./args/UpsertOnePermissionArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, InlineLoader } from "../../../helpers";
import { Permission } from "../../../models/Permission";

@Resolver(_of => Permission)
export class PermissionCrudResolver {
  @Mutation(_returns => Permission, {
    nullable: false
  })
  async createOnePermission(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateOnePermissionArgs): Promise<Permission> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'Permission', 'permission', 'create');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'Permission', 'permission', 'create', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Permission', 'permission', 'create');
    const result = await getPrismaFromContext(ctx).permission.create({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Mutation(_returns => Permission, {
    nullable: true
  })
  async deleteOnePermission(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteOnePermissionArgs): Promise<Permission | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'Permission', 'permission', 'delete');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'Permission', 'permission', 'delete', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Permission', 'permission', 'delete');
    const result = await getPrismaFromContext(ctx).permission.delete({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Query(_returns => Permission, {
    nullable: true
  })
  async findFirstPermission(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstPermissionArgs): Promise<Permission | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'Permission', 'permission', 'findFirst');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'Permission', 'permission', 'findFirst', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Permission', 'permission', 'findFirst');
    const result = await getPrismaFromContext(ctx).permission.findFirst({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Query(_returns => Permission, {
    nullable: true
  })
  async findFirstPermissionOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstPermissionOrThrowArgs): Promise<Permission | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'Permission', 'permission', 'findFirstOrThrow');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'Permission', 'permission', 'findFirstOrThrow', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Permission', 'permission', 'findFirstOrThrow');
    const result = await getPrismaFromContext(ctx).permission.findFirstOrThrow({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Query(_returns => [Permission], {
    nullable: false
  })
  async permissions(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyPermissionArgs): Promise<Permission[]> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'Permission', 'permission', 'findMany');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'Permission', 'permission', 'findMany', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Permission', 'permission', 'findMany');
    const result = await getPrismaFromContext(ctx).permission.findMany({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Mutation(_returns => Permission, {
    nullable: true
  })
  async updateOnePermission(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateOnePermissionArgs): Promise<Permission | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'Permission', 'permission', 'update');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'Permission', 'permission', 'update', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Permission', 'permission', 'update');
    const result = await getPrismaFromContext(ctx).permission.update({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Mutation(_returns => Permission, {
    nullable: false
  })
  async upsertOnePermission(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpsertOnePermissionArgs): Promise<Permission> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'Permission', 'permission', 'upsert');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'Permission', 'permission', 'upsert', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Permission', 'permission', 'upsert');
    const result = await getPrismaFromContext(ctx).permission.upsert({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }
}

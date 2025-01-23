import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneRolePermissionsArgs } from "./args/CreateOneRolePermissionsArgs";
import { DeleteOneRolePermissionsArgs } from "./args/DeleteOneRolePermissionsArgs";
import { FindFirstRolePermissionsArgs } from "./args/FindFirstRolePermissionsArgs";
import { FindFirstRolePermissionsOrThrowArgs } from "./args/FindFirstRolePermissionsOrThrowArgs";
import { FindManyRolePermissionsArgs } from "./args/FindManyRolePermissionsArgs";
import { UpdateOneRolePermissionsArgs } from "./args/UpdateOneRolePermissionsArgs";
import { UpsertOneRolePermissionsArgs } from "./args/UpsertOneRolePermissionsArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, InlineLoader } from "../../../helpers";
import { RolePermissions } from "../../../models/RolePermissions";

@Resolver(_of => RolePermissions)
export class RolePermissionsCrudResolver {
  @Mutation(_returns => RolePermissions, {
    nullable: false
  })
  async createOneRolePermissions(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateOneRolePermissionsArgs): Promise<RolePermissions> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'RolePermissions', 'rolePermissions', 'create');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'RolePermissions', 'rolePermissions', 'create', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'RolePermissions', 'rolePermissions', 'create');
    const result = await getPrismaFromContext(ctx).rolePermissions.create({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Mutation(_returns => RolePermissions, {
    nullable: true
  })
  async deleteOneRolePermissions(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteOneRolePermissionsArgs): Promise<RolePermissions | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'RolePermissions', 'rolePermissions', 'delete');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'RolePermissions', 'rolePermissions', 'delete', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'RolePermissions', 'rolePermissions', 'delete');
    const result = await getPrismaFromContext(ctx).rolePermissions.delete({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Query(_returns => RolePermissions, {
    nullable: true
  })
  async findFirstRolePermissions(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstRolePermissionsArgs): Promise<RolePermissions | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'RolePermissions', 'rolePermissions', 'findFirst');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'RolePermissions', 'rolePermissions', 'findFirst', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'RolePermissions', 'rolePermissions', 'findFirst');
    const result = await getPrismaFromContext(ctx).rolePermissions.findFirst({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Query(_returns => RolePermissions, {
    nullable: true
  })
  async findFirstRolePermissionsOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstRolePermissionsOrThrowArgs): Promise<RolePermissions | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'RolePermissions', 'rolePermissions', 'findFirstOrThrow');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'RolePermissions', 'rolePermissions', 'findFirstOrThrow', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'RolePermissions', 'rolePermissions', 'findFirstOrThrow');
    const result = await getPrismaFromContext(ctx).rolePermissions.findFirstOrThrow({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Query(_returns => [RolePermissions], {
    nullable: false
  })
  async findManyRolePermissions(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyRolePermissionsArgs): Promise<RolePermissions[]> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'RolePermissions', 'rolePermissions', 'findMany');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'RolePermissions', 'rolePermissions', 'findMany', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'RolePermissions', 'rolePermissions', 'findMany');
    const result = await getPrismaFromContext(ctx).rolePermissions.findMany({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Mutation(_returns => RolePermissions, {
    nullable: true
  })
  async updateOneRolePermissions(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateOneRolePermissionsArgs): Promise<RolePermissions | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'RolePermissions', 'rolePermissions', 'update');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'RolePermissions', 'rolePermissions', 'update', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'RolePermissions', 'rolePermissions', 'update');
    const result = await getPrismaFromContext(ctx).rolePermissions.update({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Mutation(_returns => RolePermissions, {
    nullable: false
  })
  async upsertOneRolePermissions(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpsertOneRolePermissionsArgs): Promise<RolePermissions> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'RolePermissions', 'rolePermissions', 'upsert');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'RolePermissions', 'rolePermissions', 'upsert', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'RolePermissions', 'rolePermissions', 'upsert');
    const result = await getPrismaFromContext(ctx).rolePermissions.upsert({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }
}

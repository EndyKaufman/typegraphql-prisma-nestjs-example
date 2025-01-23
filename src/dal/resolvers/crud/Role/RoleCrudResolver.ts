import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneRoleArgs } from "./args/CreateOneRoleArgs";
import { DeleteOneRoleArgs } from "./args/DeleteOneRoleArgs";
import { FindFirstRoleArgs } from "./args/FindFirstRoleArgs";
import { FindFirstRoleOrThrowArgs } from "./args/FindFirstRoleOrThrowArgs";
import { FindManyRoleArgs } from "./args/FindManyRoleArgs";
import { UpdateOneRoleArgs } from "./args/UpdateOneRoleArgs";
import { UpsertOneRoleArgs } from "./args/UpsertOneRoleArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, InlineLoader } from "../../../helpers";
import { Role } from "../../../models/Role";

@Resolver(_of => Role)
export class RoleCrudResolver {
  @Mutation(_returns => Role, {
    nullable: false
  })
  async createOneRole(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateOneRoleArgs): Promise<Role> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'Role', 'role', 'create');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'Role', 'role', 'create', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Role', 'role', 'create');
    const result = await getPrismaFromContext(ctx).role.create({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Mutation(_returns => Role, {
    nullable: true
  })
  async deleteOneRole(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteOneRoleArgs): Promise<Role | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'Role', 'role', 'delete');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'Role', 'role', 'delete', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Role', 'role', 'delete');
    const result = await getPrismaFromContext(ctx).role.delete({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Query(_returns => Role, {
    nullable: true
  })
  async findFirstRole(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstRoleArgs): Promise<Role | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'Role', 'role', 'findFirst');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'Role', 'role', 'findFirst', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Role', 'role', 'findFirst');
    const result = await getPrismaFromContext(ctx).role.findFirst({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Query(_returns => Role, {
    nullable: true
  })
  async findFirstRoleOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstRoleOrThrowArgs): Promise<Role | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'Role', 'role', 'findFirstOrThrow');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'Role', 'role', 'findFirstOrThrow', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Role', 'role', 'findFirstOrThrow');
    const result = await getPrismaFromContext(ctx).role.findFirstOrThrow({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Query(_returns => [Role], {
    nullable: false
  })
  async roles(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyRoleArgs): Promise<Role[]> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'Role', 'role', 'findMany');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'Role', 'role', 'findMany', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Role', 'role', 'findMany');
    const result = await getPrismaFromContext(ctx).role.findMany({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Mutation(_returns => Role, {
    nullable: true
  })
  async updateOneRole(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateOneRoleArgs): Promise<Role | null> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'Role', 'role', 'update');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'Role', 'role', 'update', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Role', 'role', 'update');
    const result = await getPrismaFromContext(ctx).role.update({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }

  @Mutation(_returns => Role, {
    nullable: false
  })
  async upsertOneRole(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpsertOneRoleArgs): Promise<Role> {
    const afterProcessEvents: ((result: any) => Promise<any>)[] = [];
    const { _count } = transformInfoIntoPrismaArgs(info, 'Role', 'role', 'upsert');
    const transformedArgsIntoPrismaArgs = await transformArgsIntoPrismaArgs(info, args, ctx, 'Role', 'role', 'upsert', afterProcessEvents);
    const otherArgs = _count && transformCountFieldIntoSelectRelationsCount(_count, 'Role', 'role', 'upsert');
    const result = await getPrismaFromContext(ctx).role.upsert({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
    for (const afterProcessEvent of afterProcessEvents) { await afterProcessEvent(result); }

    return result;
  }
}

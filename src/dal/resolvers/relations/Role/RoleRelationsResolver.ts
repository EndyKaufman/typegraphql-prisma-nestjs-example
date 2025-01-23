import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Role } from "../../../models/Role";
import { RolePermissions } from "../../../models/RolePermissions";
import { User } from "../../../models/User";
import { RoleRolePermissionsArgs } from "./args/RoleRolePermissionsArgs";
import { RoleUserArgs } from "./args/RoleUserArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount, InlineLoader } from "../../../helpers";
import * as DataLoader from "dataloader";

@Resolver(_of => Role)
export class RoleRelationsResolver {
  @ResolveField(_type => [User], {
    nullable: false
  })
  async User(@Root() role: Role, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @InlineLoader(<ID, Type>(context) => {
    const graphqlExecutionContext = GqlExecutionContext.create(context);
    const ctx = graphqlExecutionContext.getContext();
    return new DataLoader<ID, Type>(
      async (ids) => {
        const result: User[] = await getPrismaFromContext(ctx).user.findMany({
          where: {
            roleId: { in: ids },
          },
        });
        return ids.map(id => result.filter(r => r.id === id) || []) as Type[]
      }
    )
  }) dataloader: DataLoader<number, User[]>): Promise<User[]> {
    return await dataloader.load(role.id);
  }

  @ResolveField(_type => [RolePermissions], {
    nullable: false
  })
  async RolePermissions(@Root() role: Role, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @InlineLoader(<ID, Type>(context) => {
    const graphqlExecutionContext = GqlExecutionContext.create(context);
    const ctx = graphqlExecutionContext.getContext();
    return new DataLoader<ID, Type>(
      async (ids) => {
        const result: RolePermissions[] = await getPrismaFromContext(ctx).rolePermissions.findMany({
          where: {
            roleId: { in: ids },
          },
        });
        return ids.map(id => result.filter(r => r.id === id) || []) as Type[]
      }
    )
  }) dataloader: DataLoader<number, RolePermissions[]>): Promise<RolePermissions[]> {
    return await dataloader.load(role.id);
  }
}

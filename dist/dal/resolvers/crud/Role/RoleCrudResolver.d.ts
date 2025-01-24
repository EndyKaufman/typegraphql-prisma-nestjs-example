import type { GraphQLResolveInfo } from "graphql";
import { CreateOneRoleArgs } from "./args/CreateOneRoleArgs";
import { DeleteOneRoleArgs } from "./args/DeleteOneRoleArgs";
import { FindFirstRoleArgs } from "./args/FindFirstRoleArgs";
import { FindFirstRoleOrThrowArgs } from "./args/FindFirstRoleOrThrowArgs";
import { FindManyRoleArgs } from "./args/FindManyRoleArgs";
import { UpdateOneRoleArgs } from "./args/UpdateOneRoleArgs";
import { UpsertOneRoleArgs } from "./args/UpsertOneRoleArgs";
import { Role } from "../../../models/Role";
export declare class RoleCrudResolver {
    createOneRole(ctx: any, info: GraphQLResolveInfo, args: CreateOneRoleArgs): Promise<Role>;
    deleteOneRole(ctx: any, info: GraphQLResolveInfo, args: DeleteOneRoleArgs): Promise<Role | null>;
    findFirstRole(ctx: any, info: GraphQLResolveInfo, args: FindFirstRoleArgs): Promise<Role | null>;
    findFirstRoleOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstRoleOrThrowArgs): Promise<Role | null>;
    roles(ctx: any, info: GraphQLResolveInfo, args: FindManyRoleArgs): Promise<Role[]>;
    updateOneRole(ctx: any, info: GraphQLResolveInfo, args: UpdateOneRoleArgs): Promise<Role | null>;
    upsertOneRole(ctx: any, info: GraphQLResolveInfo, args: UpsertOneRoleArgs): Promise<Role>;
}

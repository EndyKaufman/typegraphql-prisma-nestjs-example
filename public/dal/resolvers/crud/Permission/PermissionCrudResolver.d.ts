import type { GraphQLResolveInfo } from "graphql";
import { CreateOnePermissionArgs } from "./args/CreateOnePermissionArgs";
import { DeleteOnePermissionArgs } from "./args/DeleteOnePermissionArgs";
import { FindFirstPermissionArgs } from "./args/FindFirstPermissionArgs";
import { FindFirstPermissionOrThrowArgs } from "./args/FindFirstPermissionOrThrowArgs";
import { FindManyPermissionArgs } from "./args/FindManyPermissionArgs";
import { UpdateOnePermissionArgs } from "./args/UpdateOnePermissionArgs";
import { UpsertOnePermissionArgs } from "./args/UpsertOnePermissionArgs";
import { Permission } from "../../../models/Permission";
export declare class PermissionCrudResolver {
    createOnePermission(ctx: any, info: GraphQLResolveInfo, args: CreateOnePermissionArgs): Promise<Permission>;
    deleteOnePermission(ctx: any, info: GraphQLResolveInfo, args: DeleteOnePermissionArgs): Promise<Permission | null>;
    findFirstPermission(ctx: any, info: GraphQLResolveInfo, args: FindFirstPermissionArgs): Promise<Permission | null>;
    findFirstPermissionOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstPermissionOrThrowArgs): Promise<Permission | null>;
    permissions(ctx: any, info: GraphQLResolveInfo, args: FindManyPermissionArgs): Promise<Permission[]>;
    updateOnePermission(ctx: any, info: GraphQLResolveInfo, args: UpdateOnePermissionArgs): Promise<Permission | null>;
    upsertOnePermission(ctx: any, info: GraphQLResolveInfo, args: UpsertOnePermissionArgs): Promise<Permission>;
}

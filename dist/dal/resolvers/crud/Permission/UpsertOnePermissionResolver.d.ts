import type { GraphQLResolveInfo } from "graphql";
import { UpsertOnePermissionArgs } from "./args/UpsertOnePermissionArgs";
import { Permission } from "../../../models/Permission";
export declare class UpsertOnePermissionResolver {
    upsertOnePermission(ctx: any, info: GraphQLResolveInfo, args: UpsertOnePermissionArgs): Promise<Permission>;
}

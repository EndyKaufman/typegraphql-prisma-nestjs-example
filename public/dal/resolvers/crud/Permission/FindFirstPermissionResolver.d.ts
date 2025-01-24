import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPermissionArgs } from "./args/FindFirstPermissionArgs";
import { Permission } from "../../../models/Permission";
export declare class FindFirstPermissionResolver {
    findFirstPermission(ctx: any, info: GraphQLResolveInfo, args: FindFirstPermissionArgs): Promise<Permission | null>;
}

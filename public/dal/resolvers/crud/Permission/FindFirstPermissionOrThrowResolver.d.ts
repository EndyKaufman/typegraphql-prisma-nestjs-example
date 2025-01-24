import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPermissionOrThrowArgs } from "./args/FindFirstPermissionOrThrowArgs";
import { Permission } from "../../../models/Permission";
export declare class FindFirstPermissionOrThrowResolver {
    findFirstPermissionOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstPermissionOrThrowArgs): Promise<Permission | null>;
}

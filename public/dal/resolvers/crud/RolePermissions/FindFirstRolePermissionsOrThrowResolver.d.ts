import type { GraphQLResolveInfo } from "graphql";
import { FindFirstRolePermissionsOrThrowArgs } from "./args/FindFirstRolePermissionsOrThrowArgs";
import { RolePermissions } from "../../../models/RolePermissions";
export declare class FindFirstRolePermissionsOrThrowResolver {
    findFirstRolePermissionsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstRolePermissionsOrThrowArgs): Promise<RolePermissions | null>;
}

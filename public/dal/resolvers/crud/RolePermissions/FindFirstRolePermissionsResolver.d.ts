import type { GraphQLResolveInfo } from "graphql";
import { FindFirstRolePermissionsArgs } from "./args/FindFirstRolePermissionsArgs";
import { RolePermissions } from "../../../models/RolePermissions";
export declare class FindFirstRolePermissionsResolver {
    findFirstRolePermissions(ctx: any, info: GraphQLResolveInfo, args: FindFirstRolePermissionsArgs): Promise<RolePermissions | null>;
}

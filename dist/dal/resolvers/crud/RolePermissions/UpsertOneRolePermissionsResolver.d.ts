import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneRolePermissionsArgs } from "./args/UpsertOneRolePermissionsArgs";
import { RolePermissions } from "../../../models/RolePermissions";
export declare class UpsertOneRolePermissionsResolver {
    upsertOneRolePermissions(ctx: any, info: GraphQLResolveInfo, args: UpsertOneRolePermissionsArgs): Promise<RolePermissions>;
}

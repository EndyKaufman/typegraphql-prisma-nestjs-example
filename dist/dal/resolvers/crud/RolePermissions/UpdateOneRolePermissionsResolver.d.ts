import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneRolePermissionsArgs } from "./args/UpdateOneRolePermissionsArgs";
import { RolePermissions } from "../../../models/RolePermissions";
export declare class UpdateOneRolePermissionsResolver {
    updateOneRolePermissions(ctx: any, info: GraphQLResolveInfo, args: UpdateOneRolePermissionsArgs): Promise<RolePermissions | null>;
}

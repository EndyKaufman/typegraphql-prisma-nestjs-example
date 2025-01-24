import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneRolePermissionsArgs } from "./args/DeleteOneRolePermissionsArgs";
import { RolePermissions } from "../../../models/RolePermissions";
export declare class DeleteOneRolePermissionsResolver {
    deleteOneRolePermissions(ctx: any, info: GraphQLResolveInfo, args: DeleteOneRolePermissionsArgs): Promise<RolePermissions | null>;
}

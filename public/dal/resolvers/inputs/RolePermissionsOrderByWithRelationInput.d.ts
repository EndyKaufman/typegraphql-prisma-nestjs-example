import { PermissionOrderByWithRelationInput } from "../inputs/PermissionOrderByWithRelationInput";
import { RoleOrderByWithRelationInput } from "../inputs/RoleOrderByWithRelationInput";
export declare class RolePermissionsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    roleId?: "asc" | "desc" | undefined;
    permissionId?: "asc" | "desc" | undefined;
    Role?: RoleOrderByWithRelationInput | undefined;
    Permission?: PermissionOrderByWithRelationInput | undefined;
}

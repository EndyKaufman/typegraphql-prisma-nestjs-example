import { PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput } from "../inputs/PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput";
import { RoleUpdateOneRequiredWithoutRolePermissionsNestedInput } from "../inputs/RoleUpdateOneRequiredWithoutRolePermissionsNestedInput";
export declare class RolePermissionsUpdateInput {
    Role?: RoleUpdateOneRequiredWithoutRolePermissionsNestedInput | undefined;
    Permission?: PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput | undefined;
}

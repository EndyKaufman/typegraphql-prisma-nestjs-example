import { PermissionCreateNestedOneWithoutRolePermissionsInput } from "../inputs/PermissionCreateNestedOneWithoutRolePermissionsInput";
import { RoleCreateNestedOneWithoutRolePermissionsInput } from "../inputs/RoleCreateNestedOneWithoutRolePermissionsInput";
export declare class RolePermissionsCreateInput {
    Role: RoleCreateNestedOneWithoutRolePermissionsInput;
    Permission: PermissionCreateNestedOneWithoutRolePermissionsInput;
}

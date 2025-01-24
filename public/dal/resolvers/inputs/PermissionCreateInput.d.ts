import { RolePermissionsCreateNestedManyWithoutPermissionInput } from "../inputs/RolePermissionsCreateNestedManyWithoutPermissionInput";
export declare class PermissionCreateInput {
    name: string;
    RolePermissions?: RolePermissionsCreateNestedManyWithoutPermissionInput | undefined;
}

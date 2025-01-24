import { RolePermissionsCreateNestedManyWithoutRoleInput } from "../inputs/RolePermissionsCreateNestedManyWithoutRoleInput";
export declare class RoleCreateWithoutUserInput {
    name: string;
    RolePermissions?: RolePermissionsCreateNestedManyWithoutRoleInput | undefined;
}

import { RolePermissionsCreateNestedManyWithoutRoleInput } from "../inputs/RolePermissionsCreateNestedManyWithoutRoleInput";
import { UserCreateNestedManyWithoutRoleInput } from "../inputs/UserCreateNestedManyWithoutRoleInput";
export declare class RoleCreateInput {
    name: string;
    User?: UserCreateNestedManyWithoutRoleInput | undefined;
    RolePermissions?: RolePermissionsCreateNestedManyWithoutRoleInput | undefined;
}

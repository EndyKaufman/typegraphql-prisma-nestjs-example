import { RolePermissionsUpdateManyWithoutRoleNestedInput } from "../inputs/RolePermissionsUpdateManyWithoutRoleNestedInput";
import { UserUpdateManyWithoutRoleNestedInput } from "../inputs/UserUpdateManyWithoutRoleNestedInput";
export declare class RoleUpdateInput {
    name?: string | undefined;
    User?: UserUpdateManyWithoutRoleNestedInput | undefined;
    RolePermissions?: RolePermissionsUpdateManyWithoutRoleNestedInput | undefined;
}

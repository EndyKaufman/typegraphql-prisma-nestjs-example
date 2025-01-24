import { PermissionCreateWithoutRolePermissionsInput } from "../inputs/PermissionCreateWithoutRolePermissionsInput";
import { PermissionUpdateToOneWithWhereWithoutRolePermissionsInput } from "../inputs/PermissionUpdateToOneWithWhereWithoutRolePermissionsInput";
import { PermissionWhereUniqueInput } from "../inputs/PermissionWhereUniqueInput";
export declare class PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput {
    create?: PermissionCreateWithoutRolePermissionsInput | undefined;
    connect?: PermissionWhereUniqueInput | undefined;
    update?: PermissionUpdateToOneWithWhereWithoutRolePermissionsInput | undefined;
}

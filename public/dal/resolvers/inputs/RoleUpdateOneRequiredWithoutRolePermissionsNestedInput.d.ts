import { RoleCreateWithoutRolePermissionsInput } from "../inputs/RoleCreateWithoutRolePermissionsInput";
import { RoleUpdateToOneWithWhereWithoutRolePermissionsInput } from "../inputs/RoleUpdateToOneWithWhereWithoutRolePermissionsInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";
export declare class RoleUpdateOneRequiredWithoutRolePermissionsNestedInput {
    create?: RoleCreateWithoutRolePermissionsInput | undefined;
    connect?: RoleWhereUniqueInput | undefined;
    update?: RoleUpdateToOneWithWhereWithoutRolePermissionsInput | undefined;
}

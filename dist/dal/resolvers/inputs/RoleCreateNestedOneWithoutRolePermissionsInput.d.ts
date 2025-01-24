import { RoleCreateWithoutRolePermissionsInput } from "../inputs/RoleCreateWithoutRolePermissionsInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";
export declare class RoleCreateNestedOneWithoutRolePermissionsInput {
    create?: RoleCreateWithoutRolePermissionsInput | undefined;
    connect?: RoleWhereUniqueInput | undefined;
}

import { RoleCreateWithoutRolePermissionsInput } from "../inputs/RoleCreateWithoutRolePermissionsInput";
import { RoleUpdateWithoutRolePermissionsInput } from "../inputs/RoleUpdateWithoutRolePermissionsInput";
import { RoleWhereInput } from "../inputs/RoleWhereInput";
export declare class RoleUpsertWithoutRolePermissionsInput {
    update: RoleUpdateWithoutRolePermissionsInput;
    create: RoleCreateWithoutRolePermissionsInput;
    where?: RoleWhereInput | undefined;
}

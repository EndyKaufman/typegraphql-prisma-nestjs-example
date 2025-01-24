import { IntFilter } from "../inputs/IntFilter";
export declare class RolePermissionsScalarWhereInput {
    AND?: RolePermissionsScalarWhereInput[] | undefined;
    OR?: RolePermissionsScalarWhereInput[] | undefined;
    NOT?: RolePermissionsScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    roleId?: IntFilter | undefined;
    permissionId?: IntFilter | undefined;
}

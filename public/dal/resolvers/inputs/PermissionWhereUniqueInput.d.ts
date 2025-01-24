import { PermissionWhereInput } from "../inputs/PermissionWhereInput";
import { RolePermissionsListRelationFilter } from "../inputs/RolePermissionsListRelationFilter";
export declare class PermissionWhereUniqueInput {
    id?: number | undefined;
    name?: string | undefined;
    AND?: PermissionWhereInput[] | undefined;
    OR?: PermissionWhereInput[] | undefined;
    NOT?: PermissionWhereInput[] | undefined;
    RolePermissions?: RolePermissionsListRelationFilter | undefined;
}

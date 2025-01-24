import { IntFilter } from "../inputs/IntFilter";
import { RolePermissionsListRelationFilter } from "../inputs/RolePermissionsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class PermissionWhereInput {
    AND?: PermissionWhereInput[] | undefined;
    OR?: PermissionWhereInput[] | undefined;
    NOT?: PermissionWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    RolePermissions?: RolePermissionsListRelationFilter | undefined;
}

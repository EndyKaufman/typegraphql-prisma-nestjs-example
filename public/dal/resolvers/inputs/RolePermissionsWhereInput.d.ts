import { IntFilter } from "../inputs/IntFilter";
import { PermissionRelationFilter } from "../inputs/PermissionRelationFilter";
import { RoleRelationFilter } from "../inputs/RoleRelationFilter";
export declare class RolePermissionsWhereInput {
    AND?: RolePermissionsWhereInput[] | undefined;
    OR?: RolePermissionsWhereInput[] | undefined;
    NOT?: RolePermissionsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    roleId?: IntFilter | undefined;
    permissionId?: IntFilter | undefined;
    Role?: RoleRelationFilter | undefined;
    Permission?: PermissionRelationFilter | undefined;
}

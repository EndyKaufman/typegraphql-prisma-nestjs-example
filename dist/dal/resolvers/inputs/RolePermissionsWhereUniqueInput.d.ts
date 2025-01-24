import { IntFilter } from "../inputs/IntFilter";
import { PermissionRelationFilter } from "../inputs/PermissionRelationFilter";
import { RolePermissionsRoleIdPermissionIdCompoundUniqueInput } from "../inputs/RolePermissionsRoleIdPermissionIdCompoundUniqueInput";
import { RolePermissionsWhereInput } from "../inputs/RolePermissionsWhereInput";
import { RoleRelationFilter } from "../inputs/RoleRelationFilter";
export declare class RolePermissionsWhereUniqueInput {
    id?: number | undefined;
    roleId_permissionId?: RolePermissionsRoleIdPermissionIdCompoundUniqueInput | undefined;
    AND?: RolePermissionsWhereInput[] | undefined;
    OR?: RolePermissionsWhereInput[] | undefined;
    NOT?: RolePermissionsWhereInput[] | undefined;
    roleId?: IntFilter | undefined;
    permissionId?: IntFilter | undefined;
    Role?: RoleRelationFilter | undefined;
    Permission?: PermissionRelationFilter | undefined;
}

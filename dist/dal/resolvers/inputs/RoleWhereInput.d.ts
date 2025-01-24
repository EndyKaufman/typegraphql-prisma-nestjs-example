import { IntFilter } from "../inputs/IntFilter";
import { RolePermissionsListRelationFilter } from "../inputs/RolePermissionsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
export declare class RoleWhereInput {
    AND?: RoleWhereInput[] | undefined;
    OR?: RoleWhereInput[] | undefined;
    NOT?: RoleWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    User?: UserListRelationFilter | undefined;
    RolePermissions?: RolePermissionsListRelationFilter | undefined;
}

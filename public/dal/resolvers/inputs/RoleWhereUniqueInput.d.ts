import { RolePermissionsListRelationFilter } from "../inputs/RolePermissionsListRelationFilter";
import { RoleWhereInput } from "../inputs/RoleWhereInput";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
export declare class RoleWhereUniqueInput {
    id?: number | undefined;
    name?: string | undefined;
    AND?: RoleWhereInput[] | undefined;
    OR?: RoleWhereInput[] | undefined;
    NOT?: RoleWhereInput[] | undefined;
    User?: UserListRelationFilter | undefined;
    RolePermissions?: RolePermissionsListRelationFilter | undefined;
}

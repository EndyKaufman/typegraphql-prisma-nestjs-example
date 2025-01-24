import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
export declare class RolePermissionsScalarWhereWithAggregatesInput {
    AND?: RolePermissionsScalarWhereWithAggregatesInput[] | undefined;
    OR?: RolePermissionsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: RolePermissionsScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    roleId?: IntWithAggregatesFilter | undefined;
    permissionId?: IntWithAggregatesFilter | undefined;
}

import { RolePermissionsOrderByRelationAggregateInput } from "../inputs/RolePermissionsOrderByRelationAggregateInput";
export declare class PermissionOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    RolePermissions?: RolePermissionsOrderByRelationAggregateInput | undefined;
}

import { RolePermissionsOrderByRelationAggregateInput } from "../inputs/RolePermissionsOrderByRelationAggregateInput";
import { UserOrderByRelationAggregateInput } from "../inputs/UserOrderByRelationAggregateInput";
export declare class RoleOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    User?: UserOrderByRelationAggregateInput | undefined;
    RolePermissions?: RolePermissionsOrderByRelationAggregateInput | undefined;
}

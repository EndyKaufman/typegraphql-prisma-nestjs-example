import { RolePermissionsAvgOrderByAggregateInput } from "../inputs/RolePermissionsAvgOrderByAggregateInput";
import { RolePermissionsCountOrderByAggregateInput } from "../inputs/RolePermissionsCountOrderByAggregateInput";
import { RolePermissionsMaxOrderByAggregateInput } from "../inputs/RolePermissionsMaxOrderByAggregateInput";
import { RolePermissionsMinOrderByAggregateInput } from "../inputs/RolePermissionsMinOrderByAggregateInput";
import { RolePermissionsSumOrderByAggregateInput } from "../inputs/RolePermissionsSumOrderByAggregateInput";
export declare class RolePermissionsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    roleId?: "asc" | "desc" | undefined;
    permissionId?: "asc" | "desc" | undefined;
    _count?: RolePermissionsCountOrderByAggregateInput | undefined;
    _avg?: RolePermissionsAvgOrderByAggregateInput | undefined;
    _max?: RolePermissionsMaxOrderByAggregateInput | undefined;
    _min?: RolePermissionsMinOrderByAggregateInput | undefined;
    _sum?: RolePermissionsSumOrderByAggregateInput | undefined;
}

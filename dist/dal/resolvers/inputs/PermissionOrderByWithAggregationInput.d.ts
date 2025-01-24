import { PermissionAvgOrderByAggregateInput } from "../inputs/PermissionAvgOrderByAggregateInput";
import { PermissionCountOrderByAggregateInput } from "../inputs/PermissionCountOrderByAggregateInput";
import { PermissionMaxOrderByAggregateInput } from "../inputs/PermissionMaxOrderByAggregateInput";
import { PermissionMinOrderByAggregateInput } from "../inputs/PermissionMinOrderByAggregateInput";
import { PermissionSumOrderByAggregateInput } from "../inputs/PermissionSumOrderByAggregateInput";
export declare class PermissionOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    _count?: PermissionCountOrderByAggregateInput | undefined;
    _avg?: PermissionAvgOrderByAggregateInput | undefined;
    _max?: PermissionMaxOrderByAggregateInput | undefined;
    _min?: PermissionMinOrderByAggregateInput | undefined;
    _sum?: PermissionSumOrderByAggregateInput | undefined;
}

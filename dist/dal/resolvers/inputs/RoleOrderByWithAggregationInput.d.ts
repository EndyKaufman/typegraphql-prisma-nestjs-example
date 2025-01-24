import { RoleAvgOrderByAggregateInput } from "../inputs/RoleAvgOrderByAggregateInput";
import { RoleCountOrderByAggregateInput } from "../inputs/RoleCountOrderByAggregateInput";
import { RoleMaxOrderByAggregateInput } from "../inputs/RoleMaxOrderByAggregateInput";
import { RoleMinOrderByAggregateInput } from "../inputs/RoleMinOrderByAggregateInput";
import { RoleSumOrderByAggregateInput } from "../inputs/RoleSumOrderByAggregateInput";
export declare class RoleOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    _count?: RoleCountOrderByAggregateInput | undefined;
    _avg?: RoleAvgOrderByAggregateInput | undefined;
    _max?: RoleMaxOrderByAggregateInput | undefined;
    _min?: RoleMinOrderByAggregateInput | undefined;
    _sum?: RoleSumOrderByAggregateInput | undefined;
}

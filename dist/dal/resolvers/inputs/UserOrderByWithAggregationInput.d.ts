import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserAvgOrderByAggregateInput } from "../inputs/UserAvgOrderByAggregateInput";
import { UserCountOrderByAggregateInput } from "../inputs/UserCountOrderByAggregateInput";
import { UserMaxOrderByAggregateInput } from "../inputs/UserMaxOrderByAggregateInput";
import { UserMinOrderByAggregateInput } from "../inputs/UserMinOrderByAggregateInput";
import { UserSumOrderByAggregateInput } from "../inputs/UserSumOrderByAggregateInput";
export declare class UserOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    username?: SortOrderInput | undefined;
    password?: "asc" | "desc" | undefined;
    firstName?: SortOrderInput | undefined;
    lastName?: SortOrderInput | undefined;
    lastLogin?: "asc" | "desc" | undefined;
    isSuperuser?: "asc" | "desc" | undefined;
    isStaff?: "asc" | "desc" | undefined;
    isActive?: "asc" | "desc" | undefined;
    dateJoined?: "asc" | "desc" | undefined;
    dateOfBirth?: SortOrderInput | undefined;
    roleId?: "asc" | "desc" | undefined;
    _count?: UserCountOrderByAggregateInput | undefined;
    _avg?: UserAvgOrderByAggregateInput | undefined;
    _max?: UserMaxOrderByAggregateInput | undefined;
    _min?: UserMinOrderByAggregateInput | undefined;
    _sum?: UserSumOrderByAggregateInput | undefined;
}

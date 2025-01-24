import { RoleOrderByWithRelationInput } from "../inputs/RoleOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class UserOrderByWithRelationInput {
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
    Role?: RoleOrderByWithRelationInput | undefined;
}

import { RoleUpdateOneRequiredWithoutUserNestedInput } from "../inputs/RoleUpdateOneRequiredWithoutUserNestedInput";
export declare class UserUpdateInput {
    email?: string | undefined;
    username?: string | undefined;
    password?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    lastLogin?: Date | undefined;
    isSuperuser?: boolean | undefined;
    isStaff?: boolean | undefined;
    isActive?: boolean | undefined;
    dateJoined?: Date | undefined;
    dateOfBirth?: Date | undefined;
    Role?: RoleUpdateOneRequiredWithoutUserNestedInput | undefined;
}

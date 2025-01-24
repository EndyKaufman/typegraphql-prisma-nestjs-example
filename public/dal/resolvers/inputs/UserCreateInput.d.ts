import { RoleCreateNestedOneWithoutUserInput } from "../inputs/RoleCreateNestedOneWithoutUserInput";
export declare class UserCreateInput {
    email: string;
    username?: string | undefined;
    password: string;
    firstName?: string | undefined;
    lastName?: string | undefined;
    lastLogin?: Date | undefined;
    isSuperuser?: boolean | undefined;
    isStaff?: boolean | undefined;
    isActive?: boolean | undefined;
    dateJoined?: Date | undefined;
    dateOfBirth?: Date | undefined;
    Role: RoleCreateNestedOneWithoutUserInput;
}

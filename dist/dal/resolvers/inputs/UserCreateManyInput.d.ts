export declare class UserCreateManyInput {
    id?: number | undefined;
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
    roleId: number;
}

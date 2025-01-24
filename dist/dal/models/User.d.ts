import { Role } from "../models/Role";
export declare class User {
    id: number;
    email: string;
    username?: string | null;
    password: string;
    firstName?: string | null;
    lastName?: string | null;
    lastLogin: Date;
    isSuperuser: boolean;
    isStaff: boolean;
    isActive: boolean;
    dateJoined: Date;
    dateOfBirth?: Date | null;
    roleId: number;
    Role?: Role;
}

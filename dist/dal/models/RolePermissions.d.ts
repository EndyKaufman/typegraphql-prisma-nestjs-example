import { Permission } from "../models/Permission";
import { Role } from "../models/Role";
export declare class RolePermissions {
    id: number;
    roleId: number;
    permissionId: number;
    Role?: Role;
    Permission?: Permission;
}

import { RolePermissions } from "../models/RolePermissions";
import { PermissionCount } from "../resolvers/outputs/PermissionCount";
export declare class Permission {
    id: number;
    name: string;
    RolePermissions?: RolePermissions[];
    _count?: PermissionCount | null;
}

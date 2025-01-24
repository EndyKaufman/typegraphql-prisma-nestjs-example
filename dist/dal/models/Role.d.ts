import { RolePermissions } from "../models/RolePermissions";
import { User } from "../models/User";
import { RoleCount } from "../resolvers/outputs/RoleCount";
export declare class Role {
    id: number;
    name: string;
    User?: User[];
    RolePermissions?: RolePermissions[];
    _count?: RoleCount | null;
}

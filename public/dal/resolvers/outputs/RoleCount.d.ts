import { RoleCountRolePermissionsArgs } from "./args/RoleCountRolePermissionsArgs";
import { RoleCountUserArgs } from "./args/RoleCountUserArgs";
export declare class RoleCount {
    User: number;
    RolePermissions: number;
    getUser(root: RoleCount, args: RoleCountUserArgs): number;
    getRolePermissions(root: RoleCount, args: RoleCountRolePermissionsArgs): number;
}

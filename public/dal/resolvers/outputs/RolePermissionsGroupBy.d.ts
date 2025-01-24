import { RolePermissionsAvgAggregate } from "../outputs/RolePermissionsAvgAggregate";
import { RolePermissionsCountAggregate } from "../outputs/RolePermissionsCountAggregate";
import { RolePermissionsMaxAggregate } from "../outputs/RolePermissionsMaxAggregate";
import { RolePermissionsMinAggregate } from "../outputs/RolePermissionsMinAggregate";
import { RolePermissionsSumAggregate } from "../outputs/RolePermissionsSumAggregate";
export declare class RolePermissionsGroupBy {
    id: number;
    roleId: number;
    permissionId: number;
    _count: RolePermissionsCountAggregate | null;
    _avg: RolePermissionsAvgAggregate | null;
    _sum: RolePermissionsSumAggregate | null;
    _min: RolePermissionsMinAggregate | null;
    _max: RolePermissionsMaxAggregate | null;
}

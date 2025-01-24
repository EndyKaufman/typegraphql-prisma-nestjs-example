import { PermissionAvgAggregate } from "../outputs/PermissionAvgAggregate";
import { PermissionCountAggregate } from "../outputs/PermissionCountAggregate";
import { PermissionMaxAggregate } from "../outputs/PermissionMaxAggregate";
import { PermissionMinAggregate } from "../outputs/PermissionMinAggregate";
import { PermissionSumAggregate } from "../outputs/PermissionSumAggregate";
export declare class PermissionGroupBy {
    id: number;
    name: string;
    _count: PermissionCountAggregate | null;
    _avg: PermissionAvgAggregate | null;
    _sum: PermissionSumAggregate | null;
    _min: PermissionMinAggregate | null;
    _max: PermissionMaxAggregate | null;
}

import { RoleAvgAggregate } from "../outputs/RoleAvgAggregate";
import { RoleCountAggregate } from "../outputs/RoleCountAggregate";
import { RoleMaxAggregate } from "../outputs/RoleMaxAggregate";
import { RoleMinAggregate } from "../outputs/RoleMinAggregate";
import { RoleSumAggregate } from "../outputs/RoleSumAggregate";
export declare class AggregateRole {
    _count: RoleCountAggregate | null;
    _avg: RoleAvgAggregate | null;
    _sum: RoleSumAggregate | null;
    _min: RoleMinAggregate | null;
    _max: RoleMaxAggregate | null;
}

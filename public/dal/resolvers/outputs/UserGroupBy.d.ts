import { UserAvgAggregate } from "../outputs/UserAvgAggregate";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
import { UserSumAggregate } from "../outputs/UserSumAggregate";
export declare class UserGroupBy {
    id: number;
    email: string;
    username: string | null;
    password: string;
    firstName: string | null;
    lastName: string | null;
    lastLogin: Date;
    isSuperuser: boolean;
    isStaff: boolean;
    isActive: boolean;
    dateJoined: Date;
    dateOfBirth: Date | null;
    roleId: number;
    _count: UserCountAggregate | null;
    _avg: UserAvgAggregate | null;
    _sum: UserSumAggregate | null;
    _min: UserMinAggregate | null;
    _max: UserMaxAggregate | null;
}

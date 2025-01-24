import { NestedDateTimeFilter } from "../inputs/NestedDateTimeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedDateTimeWithAggregatesFilter {
    equals?: Date | undefined;
    in?: Date[] | undefined;
    notIn?: Date[] | undefined;
    lt?: Date | undefined;
    lte?: Date | undefined;
    gt?: Date | undefined;
    gte?: Date | undefined;
    not?: NestedDateTimeWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedDateTimeFilter | undefined;
    _max?: NestedDateTimeFilter | undefined;
}

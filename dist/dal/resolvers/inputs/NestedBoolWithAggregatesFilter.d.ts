import { NestedBoolFilter } from "../inputs/NestedBoolFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedBoolWithAggregatesFilter {
    equals?: boolean | undefined;
    not?: NestedBoolWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedBoolFilter | undefined;
    _max?: NestedBoolFilter | undefined;
}

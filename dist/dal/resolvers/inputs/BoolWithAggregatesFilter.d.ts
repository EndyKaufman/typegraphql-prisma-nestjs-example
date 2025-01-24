import { NestedBoolFilter } from "../inputs/NestedBoolFilter";
import { NestedBoolWithAggregatesFilter } from "../inputs/NestedBoolWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class BoolWithAggregatesFilter {
    equals?: boolean | undefined;
    not?: NestedBoolWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedBoolFilter | undefined;
    _max?: NestedBoolFilter | undefined;
}

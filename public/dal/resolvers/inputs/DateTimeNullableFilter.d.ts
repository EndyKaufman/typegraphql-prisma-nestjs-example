import { NestedDateTimeNullableFilter } from "../inputs/NestedDateTimeNullableFilter";
export declare class DateTimeNullableFilter {
    equals?: Date | undefined;
    in?: Date[] | undefined;
    notIn?: Date[] | undefined;
    lt?: Date | undefined;
    lte?: Date | undefined;
    gt?: Date | undefined;
    gte?: Date | undefined;
    not?: NestedDateTimeNullableFilter | undefined;
}

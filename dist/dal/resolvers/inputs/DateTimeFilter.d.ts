import { NestedDateTimeFilter } from "../inputs/NestedDateTimeFilter";
export declare class DateTimeFilter {
    equals?: Date | undefined;
    in?: Date[] | undefined;
    notIn?: Date[] | undefined;
    lt?: Date | undefined;
    lte?: Date | undefined;
    gt?: Date | undefined;
    gte?: Date | undefined;
    not?: NestedDateTimeFilter | undefined;
}

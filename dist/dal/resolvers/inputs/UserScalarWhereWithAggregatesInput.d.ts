import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserScalarWhereWithAggregatesInput {
    AND?: UserScalarWhereWithAggregatesInput[] | undefined;
    OR?: UserScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UserScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    username?: StringNullableWithAggregatesFilter | undefined;
    password?: StringWithAggregatesFilter | undefined;
    firstName?: StringNullableWithAggregatesFilter | undefined;
    lastName?: StringNullableWithAggregatesFilter | undefined;
    lastLogin?: DateTimeWithAggregatesFilter | undefined;
    isSuperuser?: BoolWithAggregatesFilter | undefined;
    isStaff?: BoolWithAggregatesFilter | undefined;
    isActive?: BoolWithAggregatesFilter | undefined;
    dateJoined?: DateTimeWithAggregatesFilter | undefined;
    dateOfBirth?: DateTimeNullableWithAggregatesFilter | undefined;
    roleId?: IntWithAggregatesFilter | undefined;
}

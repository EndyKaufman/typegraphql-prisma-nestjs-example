import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserScalarWhereInput {
    AND?: UserScalarWhereInput[] | undefined;
    OR?: UserScalarWhereInput[] | undefined;
    NOT?: UserScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    email?: StringFilter | undefined;
    username?: StringNullableFilter | undefined;
    password?: StringFilter | undefined;
    firstName?: StringNullableFilter | undefined;
    lastName?: StringNullableFilter | undefined;
    lastLogin?: DateTimeFilter | undefined;
    isSuperuser?: BoolFilter | undefined;
    isStaff?: BoolFilter | undefined;
    isActive?: BoolFilter | undefined;
    dateJoined?: DateTimeFilter | undefined;
    dateOfBirth?: DateTimeNullableFilter | undefined;
    roleId?: IntFilter | undefined;
}

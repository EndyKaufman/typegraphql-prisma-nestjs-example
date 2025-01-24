import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { RoleRelationFilter } from "../inputs/RoleRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserWhereUniqueInput {
    id?: number | undefined;
    email?: string | undefined;
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
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
    Role?: RoleRelationFilter | undefined;
}

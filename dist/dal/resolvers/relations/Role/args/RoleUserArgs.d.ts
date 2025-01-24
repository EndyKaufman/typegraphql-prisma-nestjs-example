import { UserOrderByWithRelationInput } from "../../../inputs/UserOrderByWithRelationInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
export declare class RoleUserArgs {
    where?: UserWhereInput | undefined;
    orderBy?: UserOrderByWithRelationInput[] | undefined;
    cursor?: UserWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "email" | "username" | "password" | "firstName" | "lastName" | "lastLogin" | "isSuperuser" | "isStaff" | "isActive" | "dateJoined" | "dateOfBirth" | "roleId"> | undefined;
}

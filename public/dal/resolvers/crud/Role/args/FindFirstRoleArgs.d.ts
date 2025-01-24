import { RoleOrderByWithRelationInput } from "../../../inputs/RoleOrderByWithRelationInput";
import { RoleWhereInput } from "../../../inputs/RoleWhereInput";
import { RoleWhereUniqueInput } from "../../../inputs/RoleWhereUniqueInput";
export declare class FindFirstRoleArgs {
    where?: RoleWhereInput | undefined;
    orderBy?: RoleOrderByWithRelationInput[] | undefined;
    cursor?: RoleWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name"> | undefined;
}

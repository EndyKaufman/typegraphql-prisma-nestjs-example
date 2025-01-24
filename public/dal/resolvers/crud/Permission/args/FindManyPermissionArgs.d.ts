import { PermissionOrderByWithRelationInput } from "../../../inputs/PermissionOrderByWithRelationInput";
import { PermissionWhereInput } from "../../../inputs/PermissionWhereInput";
import { PermissionWhereUniqueInput } from "../../../inputs/PermissionWhereUniqueInput";
export declare class FindManyPermissionArgs {
    where?: PermissionWhereInput | undefined;
    orderBy?: PermissionOrderByWithRelationInput[] | undefined;
    cursor?: PermissionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name"> | undefined;
}

import { RolePermissionsOrderByWithRelationInput } from "../../../inputs/RolePermissionsOrderByWithRelationInput";
import { RolePermissionsWhereInput } from "../../../inputs/RolePermissionsWhereInput";
import { RolePermissionsWhereUniqueInput } from "../../../inputs/RolePermissionsWhereUniqueInput";
export declare class FindManyRolePermissionsArgs {
    where?: RolePermissionsWhereInput | undefined;
    orderBy?: RolePermissionsOrderByWithRelationInput[] | undefined;
    cursor?: RolePermissionsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "roleId" | "permissionId"> | undefined;
}

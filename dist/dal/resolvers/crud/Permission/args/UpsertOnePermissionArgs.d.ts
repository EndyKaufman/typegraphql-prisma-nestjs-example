import { PermissionCreateInput } from "../../../inputs/PermissionCreateInput";
import { PermissionUpdateInput } from "../../../inputs/PermissionUpdateInput";
import { PermissionWhereUniqueInput } from "../../../inputs/PermissionWhereUniqueInput";
export declare class UpsertOnePermissionArgs {
    where: PermissionWhereUniqueInput;
    create: PermissionCreateInput;
    update: PermissionUpdateInput;
}

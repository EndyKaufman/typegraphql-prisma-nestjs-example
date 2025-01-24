import { RoleCreateInput } from "../../../inputs/RoleCreateInput";
import { RoleUpdateInput } from "../../../inputs/RoleUpdateInput";
import { RoleWhereUniqueInput } from "../../../inputs/RoleWhereUniqueInput";
export declare class UpsertOneRoleArgs {
    where: RoleWhereUniqueInput;
    create: RoleCreateInput;
    update: RoleUpdateInput;
}

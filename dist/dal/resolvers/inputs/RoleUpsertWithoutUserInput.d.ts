import { RoleCreateWithoutUserInput } from "../inputs/RoleCreateWithoutUserInput";
import { RoleUpdateWithoutUserInput } from "../inputs/RoleUpdateWithoutUserInput";
import { RoleWhereInput } from "../inputs/RoleWhereInput";
export declare class RoleUpsertWithoutUserInput {
    update: RoleUpdateWithoutUserInput;
    create: RoleCreateWithoutUserInput;
    where?: RoleWhereInput | undefined;
}

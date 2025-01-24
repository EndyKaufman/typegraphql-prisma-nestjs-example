import { RoleCreateWithoutUserInput } from "../inputs/RoleCreateWithoutUserInput";
import { RoleUpdateToOneWithWhereWithoutUserInput } from "../inputs/RoleUpdateToOneWithWhereWithoutUserInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";
export declare class RoleUpdateOneRequiredWithoutUserNestedInput {
    create?: RoleCreateWithoutUserInput | undefined;
    connect?: RoleWhereUniqueInput | undefined;
    update?: RoleUpdateToOneWithWhereWithoutUserInput | undefined;
}

import { RoleCreateWithoutUserInput } from "../inputs/RoleCreateWithoutUserInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";
export declare class RoleCreateNestedOneWithoutUserInput {
    create?: RoleCreateWithoutUserInput | undefined;
    connect?: RoleWhereUniqueInput | undefined;
}

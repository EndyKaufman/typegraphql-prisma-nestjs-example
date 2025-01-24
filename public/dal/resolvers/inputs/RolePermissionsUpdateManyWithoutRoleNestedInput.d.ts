import { RolePermissionsCreateManyRoleInputEnvelope } from "../inputs/RolePermissionsCreateManyRoleInputEnvelope";
import { RolePermissionsCreateWithoutRoleInput } from "../inputs/RolePermissionsCreateWithoutRoleInput";
import { RolePermissionsUpdateWithWhereUniqueWithoutRoleInput } from "../inputs/RolePermissionsUpdateWithWhereUniqueWithoutRoleInput";
import { RolePermissionsWhereUniqueInput } from "../inputs/RolePermissionsWhereUniqueInput";
export declare class RolePermissionsUpdateManyWithoutRoleNestedInput {
    create?: RolePermissionsCreateWithoutRoleInput[] | undefined;
    createMany?: RolePermissionsCreateManyRoleInputEnvelope | undefined;
    delete?: RolePermissionsWhereUniqueInput[] | undefined;
    connect?: RolePermissionsWhereUniqueInput[] | undefined;
    update?: RolePermissionsUpdateWithWhereUniqueWithoutRoleInput[] | undefined;
}

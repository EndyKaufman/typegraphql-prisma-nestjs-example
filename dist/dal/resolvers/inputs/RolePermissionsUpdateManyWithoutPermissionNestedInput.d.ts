import { RolePermissionsCreateManyPermissionInputEnvelope } from "../inputs/RolePermissionsCreateManyPermissionInputEnvelope";
import { RolePermissionsCreateWithoutPermissionInput } from "../inputs/RolePermissionsCreateWithoutPermissionInput";
import { RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput } from "../inputs/RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput";
import { RolePermissionsWhereUniqueInput } from "../inputs/RolePermissionsWhereUniqueInput";
export declare class RolePermissionsUpdateManyWithoutPermissionNestedInput {
    create?: RolePermissionsCreateWithoutPermissionInput[] | undefined;
    createMany?: RolePermissionsCreateManyPermissionInputEnvelope | undefined;
    delete?: RolePermissionsWhereUniqueInput[] | undefined;
    connect?: RolePermissionsWhereUniqueInput[] | undefined;
    update?: RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput[] | undefined;
}

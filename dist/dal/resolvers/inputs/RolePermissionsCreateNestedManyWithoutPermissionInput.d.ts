import { RolePermissionsCreateManyPermissionInputEnvelope } from "../inputs/RolePermissionsCreateManyPermissionInputEnvelope";
import { RolePermissionsCreateWithoutPermissionInput } from "../inputs/RolePermissionsCreateWithoutPermissionInput";
import { RolePermissionsWhereUniqueInput } from "../inputs/RolePermissionsWhereUniqueInput";
export declare class RolePermissionsCreateNestedManyWithoutPermissionInput {
    create?: RolePermissionsCreateWithoutPermissionInput[] | undefined;
    createMany?: RolePermissionsCreateManyPermissionInputEnvelope | undefined;
    connect?: RolePermissionsWhereUniqueInput[] | undefined;
}

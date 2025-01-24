import { RolePermissionsCreateManyRoleInputEnvelope } from "../inputs/RolePermissionsCreateManyRoleInputEnvelope";
import { RolePermissionsCreateWithoutRoleInput } from "../inputs/RolePermissionsCreateWithoutRoleInput";
import { RolePermissionsWhereUniqueInput } from "../inputs/RolePermissionsWhereUniqueInput";
export declare class RolePermissionsCreateNestedManyWithoutRoleInput {
    create?: RolePermissionsCreateWithoutRoleInput[] | undefined;
    createMany?: RolePermissionsCreateManyRoleInputEnvelope | undefined;
    connect?: RolePermissionsWhereUniqueInput[] | undefined;
}

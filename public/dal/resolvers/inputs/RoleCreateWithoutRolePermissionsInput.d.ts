import { UserCreateNestedManyWithoutRoleInput } from "../inputs/UserCreateNestedManyWithoutRoleInput";
export declare class RoleCreateWithoutRolePermissionsInput {
    name: string;
    User?: UserCreateNestedManyWithoutRoleInput | undefined;
}

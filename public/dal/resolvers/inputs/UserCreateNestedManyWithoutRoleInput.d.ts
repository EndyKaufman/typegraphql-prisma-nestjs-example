import { UserCreateManyRoleInputEnvelope } from "../inputs/UserCreateManyRoleInputEnvelope";
import { UserCreateWithoutRoleInput } from "../inputs/UserCreateWithoutRoleInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedManyWithoutRoleInput {
    create?: UserCreateWithoutRoleInput[] | undefined;
    createMany?: UserCreateManyRoleInputEnvelope | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
}

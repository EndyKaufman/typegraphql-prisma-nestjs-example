import type { GraphQLResolveInfo } from "graphql";
import { CreateOneRolePermissionsArgs } from "./args/CreateOneRolePermissionsArgs";
import { DeleteOneRolePermissionsArgs } from "./args/DeleteOneRolePermissionsArgs";
import { FindFirstRolePermissionsArgs } from "./args/FindFirstRolePermissionsArgs";
import { FindFirstRolePermissionsOrThrowArgs } from "./args/FindFirstRolePermissionsOrThrowArgs";
import { FindManyRolePermissionsArgs } from "./args/FindManyRolePermissionsArgs";
import { UpdateOneRolePermissionsArgs } from "./args/UpdateOneRolePermissionsArgs";
import { UpsertOneRolePermissionsArgs } from "./args/UpsertOneRolePermissionsArgs";
import { RolePermissions } from "../../../models/RolePermissions";
export declare class RolePermissionsCrudResolver {
    createOneRolePermissions(ctx: any, info: GraphQLResolveInfo, args: CreateOneRolePermissionsArgs): Promise<RolePermissions>;
    deleteOneRolePermissions(ctx: any, info: GraphQLResolveInfo, args: DeleteOneRolePermissionsArgs): Promise<RolePermissions | null>;
    findFirstRolePermissions(ctx: any, info: GraphQLResolveInfo, args: FindFirstRolePermissionsArgs): Promise<RolePermissions | null>;
    findFirstRolePermissionsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstRolePermissionsOrThrowArgs): Promise<RolePermissions | null>;
    findManyRolePermissions(ctx: any, info: GraphQLResolveInfo, args: FindManyRolePermissionsArgs): Promise<RolePermissions[]>;
    updateOneRolePermissions(ctx: any, info: GraphQLResolveInfo, args: UpdateOneRolePermissionsArgs): Promise<RolePermissions | null>;
    upsertOneRolePermissions(ctx: any, info: GraphQLResolveInfo, args: UpsertOneRolePermissionsArgs): Promise<RolePermissions>;
}

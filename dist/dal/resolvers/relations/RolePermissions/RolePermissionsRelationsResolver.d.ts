import type { GraphQLResolveInfo } from "graphql";
import { Permission } from "../../../models/Permission";
import { Role } from "../../../models/Role";
import { RolePermissions } from "../../../models/RolePermissions";
import * as DataLoader from "dataloader";
export declare class RolePermissionsRelationsResolver {
    Role(rolePermissions: RolePermissions, ctx: any, info: GraphQLResolveInfo, dataloader: DataLoader<number, Role>): Promise<Role>;
    Permission(rolePermissions: RolePermissions, ctx: any, info: GraphQLResolveInfo, dataloader: DataLoader<number, Permission>): Promise<Permission>;
}

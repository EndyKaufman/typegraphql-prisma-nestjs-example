import type { GraphQLResolveInfo } from "graphql";
import { Permission } from "../../../models/Permission";
import { RolePermissions } from "../../../models/RolePermissions";
import * as DataLoader from "dataloader";
export declare class PermissionRelationsResolver {
    RolePermissions(permission: Permission, ctx: any, info: GraphQLResolveInfo, dataloader: DataLoader<number, RolePermissions[]>): Promise<RolePermissions[]>;
}

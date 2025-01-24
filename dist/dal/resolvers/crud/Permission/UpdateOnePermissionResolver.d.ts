import type { GraphQLResolveInfo } from "graphql";
import { UpdateOnePermissionArgs } from "./args/UpdateOnePermissionArgs";
import { Permission } from "../../../models/Permission";
export declare class UpdateOnePermissionResolver {
    updateOnePermission(ctx: any, info: GraphQLResolveInfo, args: UpdateOnePermissionArgs): Promise<Permission | null>;
}

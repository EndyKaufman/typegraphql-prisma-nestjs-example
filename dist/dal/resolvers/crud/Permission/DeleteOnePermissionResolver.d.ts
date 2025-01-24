import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePermissionArgs } from "./args/DeleteOnePermissionArgs";
import { Permission } from "../../../models/Permission";
export declare class DeleteOnePermissionResolver {
    deleteOnePermission(ctx: any, info: GraphQLResolveInfo, args: DeleteOnePermissionArgs): Promise<Permission | null>;
}

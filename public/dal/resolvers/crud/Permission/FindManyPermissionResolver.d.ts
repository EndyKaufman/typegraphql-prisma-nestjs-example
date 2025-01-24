import type { GraphQLResolveInfo } from "graphql";
import { FindManyPermissionArgs } from "./args/FindManyPermissionArgs";
import { Permission } from "../../../models/Permission";
export declare class FindManyPermissionResolver {
    permissions(ctx: any, info: GraphQLResolveInfo, args: FindManyPermissionArgs): Promise<Permission[]>;
}

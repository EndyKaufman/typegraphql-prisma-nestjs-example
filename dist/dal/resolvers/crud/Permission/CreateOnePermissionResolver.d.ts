import type { GraphQLResolveInfo } from "graphql";
import { CreateOnePermissionArgs } from "./args/CreateOnePermissionArgs";
import { Permission } from "../../../models/Permission";
export declare class CreateOnePermissionResolver {
    createOnePermission(ctx: any, info: GraphQLResolveInfo, args: CreateOnePermissionArgs): Promise<Permission>;
}

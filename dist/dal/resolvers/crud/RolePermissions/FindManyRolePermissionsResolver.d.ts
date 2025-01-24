import type { GraphQLResolveInfo } from "graphql";
import { FindManyRolePermissionsArgs } from "./args/FindManyRolePermissionsArgs";
import { RolePermissions } from "../../../models/RolePermissions";
export declare class FindManyRolePermissionsResolver {
    findManyRolePermissions(ctx: any, info: GraphQLResolveInfo, args: FindManyRolePermissionsArgs): Promise<RolePermissions[]>;
}

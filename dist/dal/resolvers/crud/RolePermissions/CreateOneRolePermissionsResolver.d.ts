import type { GraphQLResolveInfo } from "graphql";
import { CreateOneRolePermissionsArgs } from "./args/CreateOneRolePermissionsArgs";
import { RolePermissions } from "../../../models/RolePermissions";
export declare class CreateOneRolePermissionsResolver {
    createOneRolePermissions(ctx: any, info: GraphQLResolveInfo, args: CreateOneRolePermissionsArgs): Promise<RolePermissions>;
}

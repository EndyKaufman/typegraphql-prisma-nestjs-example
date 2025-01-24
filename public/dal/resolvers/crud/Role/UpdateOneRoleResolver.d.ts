import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneRoleArgs } from "./args/UpdateOneRoleArgs";
import { Role } from "../../../models/Role";
export declare class UpdateOneRoleResolver {
    updateOneRole(ctx: any, info: GraphQLResolveInfo, args: UpdateOneRoleArgs): Promise<Role | null>;
}

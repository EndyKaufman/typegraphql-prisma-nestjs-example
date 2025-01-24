import type { GraphQLResolveInfo } from "graphql";
import { FindFirstRoleArgs } from "./args/FindFirstRoleArgs";
import { Role } from "../../../models/Role";
export declare class FindFirstRoleResolver {
    findFirstRole(ctx: any, info: GraphQLResolveInfo, args: FindFirstRoleArgs): Promise<Role | null>;
}

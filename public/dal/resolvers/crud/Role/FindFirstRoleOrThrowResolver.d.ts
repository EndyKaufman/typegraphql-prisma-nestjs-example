import type { GraphQLResolveInfo } from "graphql";
import { FindFirstRoleOrThrowArgs } from "./args/FindFirstRoleOrThrowArgs";
import { Role } from "../../../models/Role";
export declare class FindFirstRoleOrThrowResolver {
    findFirstRoleOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstRoleOrThrowArgs): Promise<Role | null>;
}

import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneRoleArgs } from "./args/UpsertOneRoleArgs";
import { Role } from "../../../models/Role";
export declare class UpsertOneRoleResolver {
    upsertOneRole(ctx: any, info: GraphQLResolveInfo, args: UpsertOneRoleArgs): Promise<Role>;
}

import type { GraphQLResolveInfo } from "graphql";
import { FindManyRoleArgs } from "./args/FindManyRoleArgs";
import { Role } from "../../../models/Role";
export declare class FindManyRoleResolver {
    roles(ctx: any, info: GraphQLResolveInfo, args: FindManyRoleArgs): Promise<Role[]>;
}

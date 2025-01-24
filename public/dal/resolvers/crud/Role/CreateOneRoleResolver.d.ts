import type { GraphQLResolveInfo } from "graphql";
import { CreateOneRoleArgs } from "./args/CreateOneRoleArgs";
import { Role } from "../../../models/Role";
export declare class CreateOneRoleResolver {
    createOneRole(ctx: any, info: GraphQLResolveInfo, args: CreateOneRoleArgs): Promise<Role>;
}

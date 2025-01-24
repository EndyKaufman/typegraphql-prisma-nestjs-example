import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneRoleArgs } from "./args/DeleteOneRoleArgs";
import { Role } from "../../../models/Role";
export declare class DeleteOneRoleResolver {
    deleteOneRole(ctx: any, info: GraphQLResolveInfo, args: DeleteOneRoleArgs): Promise<Role | null>;
}

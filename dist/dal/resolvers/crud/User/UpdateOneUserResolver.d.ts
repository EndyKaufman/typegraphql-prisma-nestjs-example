import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneUserArgs } from "./args/UpdateOneUserArgs";
import { User } from "../../../models/User";
export declare class UpdateOneUserResolver {
    updateOneUser(ctx: any, info: GraphQLResolveInfo, args: UpdateOneUserArgs): Promise<User | null>;
}

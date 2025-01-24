import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneUserArgs } from "./args/DeleteOneUserArgs";
import { User } from "../../../models/User";
export declare class DeleteOneUserResolver {
    deleteOneUser(ctx: any, info: GraphQLResolveInfo, args: DeleteOneUserArgs): Promise<User | null>;
}

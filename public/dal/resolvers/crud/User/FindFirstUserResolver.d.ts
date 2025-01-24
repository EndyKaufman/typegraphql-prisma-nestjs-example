import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUserArgs } from "./args/FindFirstUserArgs";
import { User } from "../../../models/User";
export declare class FindFirstUserResolver {
    findFirstUser(ctx: any, info: GraphQLResolveInfo, args: FindFirstUserArgs): Promise<User | null>;
}

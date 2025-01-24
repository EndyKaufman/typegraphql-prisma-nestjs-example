import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserArgs } from "./args/FindUniqueUserArgs";
import { User } from "../../../models/User";
export declare class FindUniqueUserResolver {
    user(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUserArgs): Promise<User | null>;
}

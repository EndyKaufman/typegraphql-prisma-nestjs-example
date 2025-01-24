import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneUserArgs } from "./args/UpsertOneUserArgs";
import { User } from "../../../models/User";
export declare class UpsertOneUserResolver {
    upsertOneUser(ctx: any, info: GraphQLResolveInfo, args: UpsertOneUserArgs): Promise<User>;
}

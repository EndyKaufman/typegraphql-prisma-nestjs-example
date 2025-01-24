import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueUserOrThrowArgs } from "./args/FindUniqueUserOrThrowArgs";
import { User } from "../../../models/User";
export declare class FindUniqueUserOrThrowResolver {
    getUser(ctx: any, info: GraphQLResolveInfo, args: FindUniqueUserOrThrowArgs): Promise<User | null>;
}

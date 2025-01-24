import type { GraphQLResolveInfo } from "graphql";
import { FindFirstUserOrThrowArgs } from "./args/FindFirstUserOrThrowArgs";
import { User } from "../../../models/User";
export declare class FindFirstUserOrThrowResolver {
    findFirstUserOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstUserOrThrowArgs): Promise<User | null>;
}

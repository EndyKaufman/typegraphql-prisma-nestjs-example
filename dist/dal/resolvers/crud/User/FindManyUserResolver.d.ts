import type { GraphQLResolveInfo } from "graphql";
import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { User } from "../../../models/User";
export declare class FindManyUserResolver {
    users(ctx: any, info: GraphQLResolveInfo, args: FindManyUserArgs): Promise<User[]>;
}

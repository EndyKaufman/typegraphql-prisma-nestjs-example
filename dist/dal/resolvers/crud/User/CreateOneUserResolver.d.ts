import type { GraphQLResolveInfo } from "graphql";
import { CreateOneUserArgs } from "./args/CreateOneUserArgs";
import { User } from "../../../models/User";
export declare class CreateOneUserResolver {
    createOneUser(ctx: any, info: GraphQLResolveInfo, args: CreateOneUserArgs): Promise<User>;
}

import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserArgs } from "./args/AggregateUserArgs";
import { AggregateUser } from "../../outputs/AggregateUser";
export declare class AggregateUserResolver {
    aggregateUser(ctx: any, info: GraphQLResolveInfo, args: AggregateUserArgs): Promise<AggregateUser>;
}

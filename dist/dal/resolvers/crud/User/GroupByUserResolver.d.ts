import type { GraphQLResolveInfo } from "graphql";
import { GroupByUserArgs } from "./args/GroupByUserArgs";
import { UserGroupBy } from "../../outputs/UserGroupBy";
export declare class GroupByUserResolver {
    groupByUser(ctx: any, info: GraphQLResolveInfo, args: GroupByUserArgs): Promise<UserGroupBy[]>;
}

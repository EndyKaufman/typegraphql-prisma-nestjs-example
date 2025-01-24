import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyUserArgs } from "./args/UpdateManyUserArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyUserResolver {
    updateManyUser(ctx: any, info: GraphQLResolveInfo, args: UpdateManyUserArgs): Promise<AffectedRowsOutput>;
}

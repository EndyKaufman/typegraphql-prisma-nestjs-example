import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyUserArgs } from "./args/DeleteManyUserArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyUserResolver {
    deleteManyUser(ctx: any, info: GraphQLResolveInfo, args: DeleteManyUserArgs): Promise<AffectedRowsOutput>;
}

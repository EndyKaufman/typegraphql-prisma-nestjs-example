import type { GraphQLResolveInfo } from "graphql";
import { CreateManyUserArgs } from "./args/CreateManyUserArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyUserResolver {
    createManyUser(ctx: any, info: GraphQLResolveInfo, args: CreateManyUserArgs): Promise<AffectedRowsOutput>;
}

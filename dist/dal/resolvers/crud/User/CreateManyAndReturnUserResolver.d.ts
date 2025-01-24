import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnUserArgs } from "./args/CreateManyAndReturnUserArgs";
import { CreateManyAndReturnUser } from "../../outputs/CreateManyAndReturnUser";
export declare class CreateManyAndReturnUserResolver {
    createManyAndReturnUser(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnUserArgs): Promise<CreateManyAndReturnUser[]>;
}

import type { GraphQLResolveInfo } from "graphql";
import { Role } from "../../../models/Role";
import { User } from "../../../models/User";
import * as DataLoader from "dataloader";
export declare class UserRelationsResolver {
    Role(user: User, ctx: any, info: GraphQLResolveInfo, dataloader: DataLoader<number, Role>): Promise<Role>;
}

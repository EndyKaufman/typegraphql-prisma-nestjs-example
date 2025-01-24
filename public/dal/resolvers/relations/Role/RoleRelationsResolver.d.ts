import type { GraphQLResolveInfo } from "graphql";
import { Role } from "../../../models/Role";
import { RolePermissions } from "../../../models/RolePermissions";
import { User } from "../../../models/User";
import * as DataLoader from "dataloader";
export declare class RoleRelationsResolver {
    User(role: Role, ctx: any, info: GraphQLResolveInfo, dataloader: DataLoader<number, User[]>): Promise<User[]>;
    RolePermissions(role: Role, ctx: any, info: GraphQLResolveInfo, dataloader: DataLoader<number, RolePermissions[]>): Promise<RolePermissions[]>;
}

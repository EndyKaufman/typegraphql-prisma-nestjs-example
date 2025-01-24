import type { GraphQLResolveInfo } from "graphql";
import { CreateOneUserArgs } from "./args/CreateOneUserArgs";
import { DeleteOneUserArgs } from "./args/DeleteOneUserArgs";
import { FindFirstUserArgs } from "./args/FindFirstUserArgs";
import { FindFirstUserOrThrowArgs } from "./args/FindFirstUserOrThrowArgs";
import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { UpdateOneUserArgs } from "./args/UpdateOneUserArgs";
import { UpsertOneUserArgs } from "./args/UpsertOneUserArgs";
import { User } from "../../../models/User";
export declare class UserCrudResolver {
    createOneUser(ctx: any, info: GraphQLResolveInfo, args: CreateOneUserArgs): Promise<User>;
    deleteOneUser(ctx: any, info: GraphQLResolveInfo, args: DeleteOneUserArgs): Promise<User | null>;
    findFirstUser(ctx: any, info: GraphQLResolveInfo, args: FindFirstUserArgs): Promise<User | null>;
    findFirstUserOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstUserOrThrowArgs): Promise<User | null>;
    users(ctx: any, info: GraphQLResolveInfo, args: FindManyUserArgs): Promise<User[]>;
    updateOneUser(ctx: any, info: GraphQLResolveInfo, args: UpdateOneUserArgs): Promise<User | null>;
    upsertOneUser(ctx: any, info: GraphQLResolveInfo, args: UpsertOneUserArgs): Promise<User>;
}

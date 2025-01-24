import type { GraphQLResolveInfo } from "graphql";
import { CallHandler, ExecutionContext, NestInterceptor, Type } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import * as DataLoader from "dataloader";
import { Observable } from "rxjs";
export declare function transformInfoIntoPrismaArgs(info: GraphQLResolveInfo, modelName?: string, collectionName?: string, prismaMethod?: string): Record<string, any>;
export declare function getPrismaFromContext(context: any): any;
export declare function transformCountFieldIntoSelectRelationsCount(_count: object, modelName?: string, collectionName?: string, prismaMethod?: string): {
    include: {
        _count: {
            select: {
                [x: string]: any;
            };
        };
    };
};
export declare let transformArgsIntoPrismaArgs: <TArgs = Record<string, any>, TContext = any>(info: GraphQLResolveInfo, args: TArgs, ctx: TContext, modelName?: string, collectionName?: string, prismaMethod?: string, afterProcessEvents?: ((result: any) => Promise<any>)[]) => Promise<TArgs>;
export declare function setTransformArgsIntoPrismaArgs(newTransformArgsIntoPrismaArgs: typeof transformArgsIntoPrismaArgs): void;
export declare class GraphqlError extends Error {
}
export interface GraphqlDataLoader<ID, Type> {
    generateDataLoader(context?: ExecutionContext): DataLoader<ID, Type>;
}
export declare class GraphqlDataLoaderInterceptor implements NestInterceptor {
    private readonly moduleRef;
    constructor(moduleRef: ModuleRef);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
export declare const Loader: (...dataOrPipes: (import("@nestjs/common").PipeTransform<any, any> | Type<import("@nestjs/common").PipeTransform<any, any>> | Type<GraphqlDataLoader<any, any>>)[]) => ParameterDecorator;
export declare const InlineLoadersStorage: Map<any, any>;
export declare const InlineLoader: (...dataOrPipes: (import("@nestjs/common").PipeTransform<any, any> | Type<import("@nestjs/common").PipeTransform<any, any>> | (<ID, Type>(context?: ExecutionContext) => DataLoader<ID, Type> | {
    name: string;
    loader: DataLoader<ID, Type>;
}))[]) => ParameterDecorator;

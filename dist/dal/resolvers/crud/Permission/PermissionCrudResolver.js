"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionCrudResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const CreateOnePermissionArgs_1 = require("./args/CreateOnePermissionArgs");
const DeleteOnePermissionArgs_1 = require("./args/DeleteOnePermissionArgs");
const FindFirstPermissionArgs_1 = require("./args/FindFirstPermissionArgs");
const FindFirstPermissionOrThrowArgs_1 = require("./args/FindFirstPermissionOrThrowArgs");
const FindManyPermissionArgs_1 = require("./args/FindManyPermissionArgs");
const UpdateOnePermissionArgs_1 = require("./args/UpdateOnePermissionArgs");
const UpsertOnePermissionArgs_1 = require("./args/UpsertOnePermissionArgs");
const helpers_1 = require("../../../helpers");
const Permission_1 = require("../../../models/Permission");
let PermissionCrudResolver = class PermissionCrudResolver {
    async createOnePermission(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'Permission', 'permission', 'create');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'Permission', 'permission', 'create', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'Permission', 'permission', 'create');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).permission.create({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
    async deleteOnePermission(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'Permission', 'permission', 'delete');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'Permission', 'permission', 'delete', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'Permission', 'permission', 'delete');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).permission.delete({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
    async findFirstPermission(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'Permission', 'permission', 'findFirst');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'Permission', 'permission', 'findFirst', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'Permission', 'permission', 'findFirst');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).permission.findFirst({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
    async findFirstPermissionOrThrow(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'Permission', 'permission', 'findFirstOrThrow');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'Permission', 'permission', 'findFirstOrThrow', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'Permission', 'permission', 'findFirstOrThrow');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).permission.findFirstOrThrow({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
    async permissions(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'Permission', 'permission', 'findMany');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'Permission', 'permission', 'findMany', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'Permission', 'permission', 'findMany');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).permission.findMany({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
    async updateOnePermission(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'Permission', 'permission', 'update');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'Permission', 'permission', 'update', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'Permission', 'permission', 'update');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).permission.update({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
    async upsertOnePermission(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'Permission', 'permission', 'upsert');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'Permission', 'permission', 'upsert', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'Permission', 'permission', 'upsert');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).permission.upsert({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
};
exports.PermissionCrudResolver = PermissionCrudResolver;
__decorate([
    (0, graphql_1.Mutation)(_returns => Permission_1.Permission, {
        nullable: false
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOnePermissionArgs_1.CreateOnePermissionArgs]),
    __metadata("design:returntype", Promise)
], PermissionCrudResolver.prototype, "createOnePermission", null);
__decorate([
    (0, graphql_1.Mutation)(_returns => Permission_1.Permission, {
        nullable: true
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOnePermissionArgs_1.DeleteOnePermissionArgs]),
    __metadata("design:returntype", Promise)
], PermissionCrudResolver.prototype, "deleteOnePermission", null);
__decorate([
    (0, graphql_1.Query)(_returns => Permission_1.Permission, {
        nullable: true
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstPermissionArgs_1.FindFirstPermissionArgs]),
    __metadata("design:returntype", Promise)
], PermissionCrudResolver.prototype, "findFirstPermission", null);
__decorate([
    (0, graphql_1.Query)(_returns => Permission_1.Permission, {
        nullable: true
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstPermissionOrThrowArgs_1.FindFirstPermissionOrThrowArgs]),
    __metadata("design:returntype", Promise)
], PermissionCrudResolver.prototype, "findFirstPermissionOrThrow", null);
__decorate([
    (0, graphql_1.Query)(_returns => [Permission_1.Permission], {
        nullable: false
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyPermissionArgs_1.FindManyPermissionArgs]),
    __metadata("design:returntype", Promise)
], PermissionCrudResolver.prototype, "permissions", null);
__decorate([
    (0, graphql_1.Mutation)(_returns => Permission_1.Permission, {
        nullable: true
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOnePermissionArgs_1.UpdateOnePermissionArgs]),
    __metadata("design:returntype", Promise)
], PermissionCrudResolver.prototype, "updateOnePermission", null);
__decorate([
    (0, graphql_1.Mutation)(_returns => Permission_1.Permission, {
        nullable: false
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOnePermissionArgs_1.UpsertOnePermissionArgs]),
    __metadata("design:returntype", Promise)
], PermissionCrudResolver.prototype, "upsertOnePermission", null);
exports.PermissionCrudResolver = PermissionCrudResolver = __decorate([
    (0, graphql_1.Resolver)(_of => Permission_1.Permission)
], PermissionCrudResolver);
//# sourceMappingURL=PermissionCrudResolver.js.map
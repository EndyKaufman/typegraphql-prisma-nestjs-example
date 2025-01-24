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
exports.RolePermissionsCrudResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const CreateOneRolePermissionsArgs_1 = require("./args/CreateOneRolePermissionsArgs");
const DeleteOneRolePermissionsArgs_1 = require("./args/DeleteOneRolePermissionsArgs");
const FindFirstRolePermissionsArgs_1 = require("./args/FindFirstRolePermissionsArgs");
const FindFirstRolePermissionsOrThrowArgs_1 = require("./args/FindFirstRolePermissionsOrThrowArgs");
const FindManyRolePermissionsArgs_1 = require("./args/FindManyRolePermissionsArgs");
const UpdateOneRolePermissionsArgs_1 = require("./args/UpdateOneRolePermissionsArgs");
const UpsertOneRolePermissionsArgs_1 = require("./args/UpsertOneRolePermissionsArgs");
const helpers_1 = require("../../../helpers");
const RolePermissions_1 = require("../../../models/RolePermissions");
let RolePermissionsCrudResolver = class RolePermissionsCrudResolver {
    async createOneRolePermissions(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'RolePermissions', 'rolePermissions', 'create');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'RolePermissions', 'rolePermissions', 'create', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'RolePermissions', 'rolePermissions', 'create');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).rolePermissions.create({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
    async deleteOneRolePermissions(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'RolePermissions', 'rolePermissions', 'delete');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'RolePermissions', 'rolePermissions', 'delete', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'RolePermissions', 'rolePermissions', 'delete');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).rolePermissions.delete({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
    async findFirstRolePermissions(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'RolePermissions', 'rolePermissions', 'findFirst');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'RolePermissions', 'rolePermissions', 'findFirst', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'RolePermissions', 'rolePermissions', 'findFirst');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).rolePermissions.findFirst({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
    async findFirstRolePermissionsOrThrow(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'RolePermissions', 'rolePermissions', 'findFirstOrThrow');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'RolePermissions', 'rolePermissions', 'findFirstOrThrow', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'RolePermissions', 'rolePermissions', 'findFirstOrThrow');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).rolePermissions.findFirstOrThrow({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
    async findManyRolePermissions(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'RolePermissions', 'rolePermissions', 'findMany');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'RolePermissions', 'rolePermissions', 'findMany', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'RolePermissions', 'rolePermissions', 'findMany');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).rolePermissions.findMany({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
    async updateOneRolePermissions(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'RolePermissions', 'rolePermissions', 'update');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'RolePermissions', 'rolePermissions', 'update', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'RolePermissions', 'rolePermissions', 'update');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).rolePermissions.update({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
    async upsertOneRolePermissions(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'RolePermissions', 'rolePermissions', 'upsert');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'RolePermissions', 'rolePermissions', 'upsert', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'RolePermissions', 'rolePermissions', 'upsert');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).rolePermissions.upsert({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
};
exports.RolePermissionsCrudResolver = RolePermissionsCrudResolver;
__decorate([
    (0, graphql_1.Mutation)(_returns => RolePermissions_1.RolePermissions, {
        nullable: false
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneRolePermissionsArgs_1.CreateOneRolePermissionsArgs]),
    __metadata("design:returntype", Promise)
], RolePermissionsCrudResolver.prototype, "createOneRolePermissions", null);
__decorate([
    (0, graphql_1.Mutation)(_returns => RolePermissions_1.RolePermissions, {
        nullable: true
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneRolePermissionsArgs_1.DeleteOneRolePermissionsArgs]),
    __metadata("design:returntype", Promise)
], RolePermissionsCrudResolver.prototype, "deleteOneRolePermissions", null);
__decorate([
    (0, graphql_1.Query)(_returns => RolePermissions_1.RolePermissions, {
        nullable: true
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstRolePermissionsArgs_1.FindFirstRolePermissionsArgs]),
    __metadata("design:returntype", Promise)
], RolePermissionsCrudResolver.prototype, "findFirstRolePermissions", null);
__decorate([
    (0, graphql_1.Query)(_returns => RolePermissions_1.RolePermissions, {
        nullable: true
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstRolePermissionsOrThrowArgs_1.FindFirstRolePermissionsOrThrowArgs]),
    __metadata("design:returntype", Promise)
], RolePermissionsCrudResolver.prototype, "findFirstRolePermissionsOrThrow", null);
__decorate([
    (0, graphql_1.Query)(_returns => [RolePermissions_1.RolePermissions], {
        nullable: false
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyRolePermissionsArgs_1.FindManyRolePermissionsArgs]),
    __metadata("design:returntype", Promise)
], RolePermissionsCrudResolver.prototype, "findManyRolePermissions", null);
__decorate([
    (0, graphql_1.Mutation)(_returns => RolePermissions_1.RolePermissions, {
        nullable: true
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneRolePermissionsArgs_1.UpdateOneRolePermissionsArgs]),
    __metadata("design:returntype", Promise)
], RolePermissionsCrudResolver.prototype, "updateOneRolePermissions", null);
__decorate([
    (0, graphql_1.Mutation)(_returns => RolePermissions_1.RolePermissions, {
        nullable: false
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneRolePermissionsArgs_1.UpsertOneRolePermissionsArgs]),
    __metadata("design:returntype", Promise)
], RolePermissionsCrudResolver.prototype, "upsertOneRolePermissions", null);
exports.RolePermissionsCrudResolver = RolePermissionsCrudResolver = __decorate([
    (0, graphql_1.Resolver)(_of => RolePermissions_1.RolePermissions)
], RolePermissionsCrudResolver);
//# sourceMappingURL=RolePermissionsCrudResolver.js.map
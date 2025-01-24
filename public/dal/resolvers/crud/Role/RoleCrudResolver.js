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
exports.RoleCrudResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const CreateOneRoleArgs_1 = require("./args/CreateOneRoleArgs");
const DeleteOneRoleArgs_1 = require("./args/DeleteOneRoleArgs");
const FindFirstRoleArgs_1 = require("./args/FindFirstRoleArgs");
const FindFirstRoleOrThrowArgs_1 = require("./args/FindFirstRoleOrThrowArgs");
const FindManyRoleArgs_1 = require("./args/FindManyRoleArgs");
const UpdateOneRoleArgs_1 = require("./args/UpdateOneRoleArgs");
const UpsertOneRoleArgs_1 = require("./args/UpsertOneRoleArgs");
const helpers_1 = require("../../../helpers");
const Role_1 = require("../../../models/Role");
let RoleCrudResolver = class RoleCrudResolver {
    async createOneRole(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'Role', 'role', 'create');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'Role', 'role', 'create', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'Role', 'role', 'create');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).role.create({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
    async deleteOneRole(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'Role', 'role', 'delete');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'Role', 'role', 'delete', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'Role', 'role', 'delete');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).role.delete({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
    async findFirstRole(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'Role', 'role', 'findFirst');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'Role', 'role', 'findFirst', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'Role', 'role', 'findFirst');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).role.findFirst({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
    async findFirstRoleOrThrow(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'Role', 'role', 'findFirstOrThrow');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'Role', 'role', 'findFirstOrThrow', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'Role', 'role', 'findFirstOrThrow');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).role.findFirstOrThrow({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
    async roles(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'Role', 'role', 'findMany');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'Role', 'role', 'findMany', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'Role', 'role', 'findMany');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).role.findMany({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
    async updateOneRole(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'Role', 'role', 'update');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'Role', 'role', 'update', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'Role', 'role', 'update');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).role.update({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
    async upsertOneRole(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'Role', 'role', 'upsert');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'Role', 'role', 'upsert', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'Role', 'role', 'upsert');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).role.upsert({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
};
exports.RoleCrudResolver = RoleCrudResolver;
__decorate([
    (0, graphql_1.Mutation)(_returns => Role_1.Role, {
        nullable: false
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneRoleArgs_1.CreateOneRoleArgs]),
    __metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "createOneRole", null);
__decorate([
    (0, graphql_1.Mutation)(_returns => Role_1.Role, {
        nullable: true
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneRoleArgs_1.DeleteOneRoleArgs]),
    __metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "deleteOneRole", null);
__decorate([
    (0, graphql_1.Query)(_returns => Role_1.Role, {
        nullable: true
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstRoleArgs_1.FindFirstRoleArgs]),
    __metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "findFirstRole", null);
__decorate([
    (0, graphql_1.Query)(_returns => Role_1.Role, {
        nullable: true
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstRoleOrThrowArgs_1.FindFirstRoleOrThrowArgs]),
    __metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "findFirstRoleOrThrow", null);
__decorate([
    (0, graphql_1.Query)(_returns => [Role_1.Role], {
        nullable: false
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyRoleArgs_1.FindManyRoleArgs]),
    __metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "roles", null);
__decorate([
    (0, graphql_1.Mutation)(_returns => Role_1.Role, {
        nullable: true
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneRoleArgs_1.UpdateOneRoleArgs]),
    __metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "updateOneRole", null);
__decorate([
    (0, graphql_1.Mutation)(_returns => Role_1.Role, {
        nullable: false
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneRoleArgs_1.UpsertOneRoleArgs]),
    __metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "upsertOneRole", null);
exports.RoleCrudResolver = RoleCrudResolver = __decorate([
    (0, graphql_1.Resolver)(_of => Role_1.Role)
], RoleCrudResolver);
//# sourceMappingURL=RoleCrudResolver.js.map
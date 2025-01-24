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
exports.FindManyRolePermissionsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const FindManyRolePermissionsArgs_1 = require("./args/FindManyRolePermissionsArgs");
const RolePermissions_1 = require("../../../models/RolePermissions");
const helpers_1 = require("../../../helpers");
let FindManyRolePermissionsResolver = class FindManyRolePermissionsResolver {
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
};
exports.FindManyRolePermissionsResolver = FindManyRolePermissionsResolver;
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
], FindManyRolePermissionsResolver.prototype, "findManyRolePermissions", null);
exports.FindManyRolePermissionsResolver = FindManyRolePermissionsResolver = __decorate([
    (0, graphql_1.Resolver)(_of => RolePermissions_1.RolePermissions)
], FindManyRolePermissionsResolver);
//# sourceMappingURL=FindManyRolePermissionsResolver.js.map
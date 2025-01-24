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
exports.FindUniqueUserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const FindUniqueUserArgs_1 = require("./args/FindUniqueUserArgs");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let FindUniqueUserResolver = class FindUniqueUserResolver {
    async user(ctx, info, args) {
        const afterProcessEvents = [];
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info, 'User', 'user', 'findUnique');
        const transformedArgsIntoPrismaArgs = await (0, helpers_1.transformArgsIntoPrismaArgs)(info, args, ctx, 'User', 'user', 'findUnique', afterProcessEvents);
        const otherArgs = _count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count, 'User', 'user', 'findUnique');
        const result = await (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({ ...transformedArgsIntoPrismaArgs, ...otherArgs, });
        for (const afterProcessEvent of afterProcessEvents) {
            await afterProcessEvent(result);
        }
        return result;
    }
};
exports.FindUniqueUserResolver = FindUniqueUserResolver;
__decorate([
    (0, graphql_1.Query)(_returns => User_1.User, {
        nullable: true
    }),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Info)()),
    __param(2, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueUserArgs_1.FindUniqueUserArgs]),
    __metadata("design:returntype", Promise)
], FindUniqueUserResolver.prototype, "user", null);
exports.FindUniqueUserResolver = FindUniqueUserResolver = __decorate([
    (0, graphql_1.Resolver)(_of => User_1.User)
], FindUniqueUserResolver);
//# sourceMappingURL=FindUniqueUserResolver.js.map
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
exports.UserRelationsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const Role_1 = require("../../../models/Role");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
const DataLoader = require("dataloader");
let UserRelationsResolver = class UserRelationsResolver {
    async Role(user, ctx, info, dataloader) {
        return await dataloader.load(user.roleId);
    }
};
exports.UserRelationsResolver = UserRelationsResolver;
__decorate([
    (0, graphql_1.ResolveField)(_type => Role_1.Role, {
        nullable: false
    }),
    __param(0, (0, graphql_1.Root)()),
    __param(1, (0, graphql_1.Context)()),
    __param(2, (0, graphql_1.Info)()),
    __param(3, (0, helpers_1.InlineLoader)((context) => {
        const graphqlExecutionContext = graphql_1.GqlExecutionContext.create(context);
        const ctx = graphqlExecutionContext.getContext();
        return new DataLoader(async (ids) => {
            const result = await (0, helpers_1.getPrismaFromContext)(ctx).role.findMany({
                where: {
                    id: { in: ids },
                },
            });
            return ids.map(id => result.find(r => r.id === id) || null);
        });
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, Object, DataLoader]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "Role", null);
exports.UserRelationsResolver = UserRelationsResolver = __decorate([
    (0, graphql_1.Resolver)(_of => User_1.User)
], UserRelationsResolver);
//# sourceMappingURL=UserRelationsResolver.js.map
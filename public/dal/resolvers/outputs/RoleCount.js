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
exports.RoleCount = void 0;
const graphql_1 = require("@nestjs/graphql");
const RoleCountRolePermissionsArgs_1 = require("./args/RoleCountRolePermissionsArgs");
const RoleCountUserArgs_1 = require("./args/RoleCountUserArgs");
let RoleCount = class RoleCount {
    getUser(root, args) {
        return root.User;
    }
    getRolePermissions(root, args) {
        return root.RolePermissions;
    }
};
exports.RoleCount = RoleCount;
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        name: "User",
        nullable: false
    }),
    __param(0, (0, graphql_1.Root)()),
    __param(1, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RoleCount, RoleCountUserArgs_1.RoleCountUserArgs]),
    __metadata("design:returntype", Number)
], RoleCount.prototype, "getUser", null);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        name: "RolePermissions",
        nullable: false
    }),
    __param(0, (0, graphql_1.Root)()),
    __param(1, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RoleCount, RoleCountRolePermissionsArgs_1.RoleCountRolePermissionsArgs]),
    __metadata("design:returntype", Number)
], RoleCount.prototype, "getRolePermissions", null);
exports.RoleCount = RoleCount = __decorate([
    (0, graphql_1.ObjectType)("RoleCount", {
        isAbstract: true
    })
], RoleCount);
//# sourceMappingURL=RoleCount.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const RolePermissionsListRelationFilter_1 = require("../inputs/RolePermissionsListRelationFilter");
const RoleWhereInput_1 = require("../inputs/RoleWhereInput");
const UserListRelationFilter_1 = require("../inputs/UserListRelationFilter");
let RoleWhereUniqueInput = class RoleWhereUniqueInput {
};
exports.RoleWhereUniqueInput = RoleWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], RoleWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RoleWhereUniqueInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [RoleWhereInput_1.RoleWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RoleWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [RoleWhereInput_1.RoleWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RoleWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [RoleWhereInput_1.RoleWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RoleWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(_type => UserListRelationFilter_1.UserListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", UserListRelationFilter_1.UserListRelationFilter)
], RoleWhereUniqueInput.prototype, "User", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsListRelationFilter_1.RolePermissionsListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsListRelationFilter_1.RolePermissionsListRelationFilter)
], RoleWhereUniqueInput.prototype, "RolePermissions", void 0);
exports.RoleWhereUniqueInput = RoleWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)("RoleWhereUniqueInput", {
        isAbstract: true
    })
], RoleWhereUniqueInput);
//# sourceMappingURL=RoleWhereUniqueInput.js.map
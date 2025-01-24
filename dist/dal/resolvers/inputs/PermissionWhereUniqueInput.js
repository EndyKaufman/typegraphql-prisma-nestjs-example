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
exports.PermissionWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const PermissionWhereInput_1 = require("../inputs/PermissionWhereInput");
const RolePermissionsListRelationFilter_1 = require("../inputs/RolePermissionsListRelationFilter");
let PermissionWhereUniqueInput = class PermissionWhereUniqueInput {
};
exports.PermissionWhereUniqueInput = PermissionWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], PermissionWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], PermissionWhereUniqueInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [PermissionWhereInput_1.PermissionWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PermissionWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [PermissionWhereInput_1.PermissionWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PermissionWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [PermissionWhereInput_1.PermissionWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PermissionWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsListRelationFilter_1.RolePermissionsListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsListRelationFilter_1.RolePermissionsListRelationFilter)
], PermissionWhereUniqueInput.prototype, "RolePermissions", void 0);
exports.PermissionWhereUniqueInput = PermissionWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)("PermissionWhereUniqueInput", {
        isAbstract: true
    })
], PermissionWhereUniqueInput);
//# sourceMappingURL=PermissionWhereUniqueInput.js.map
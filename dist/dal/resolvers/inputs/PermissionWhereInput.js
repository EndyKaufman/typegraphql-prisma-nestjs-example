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
exports.PermissionWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const IntFilter_1 = require("../inputs/IntFilter");
const RolePermissionsListRelationFilter_1 = require("../inputs/RolePermissionsListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let PermissionWhereInput = class PermissionWhereInput {
};
exports.PermissionWhereInput = PermissionWhereInput;
__decorate([
    (0, graphql_1.Field)(_type => [PermissionWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PermissionWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [PermissionWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PermissionWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [PermissionWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PermissionWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], PermissionWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], PermissionWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsListRelationFilter_1.RolePermissionsListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsListRelationFilter_1.RolePermissionsListRelationFilter)
], PermissionWhereInput.prototype, "RolePermissions", void 0);
exports.PermissionWhereInput = PermissionWhereInput = __decorate([
    (0, graphql_1.InputType)("PermissionWhereInput", {
        isAbstract: true
    })
], PermissionWhereInput);
//# sourceMappingURL=PermissionWhereInput.js.map
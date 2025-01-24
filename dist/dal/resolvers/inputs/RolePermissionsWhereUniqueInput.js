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
exports.RolePermissionsWhereUniqueInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const IntFilter_1 = require("../inputs/IntFilter");
const PermissionRelationFilter_1 = require("../inputs/PermissionRelationFilter");
const RolePermissionsRoleIdPermissionIdCompoundUniqueInput_1 = require("../inputs/RolePermissionsRoleIdPermissionIdCompoundUniqueInput");
const RolePermissionsWhereInput_1 = require("../inputs/RolePermissionsWhereInput");
const RoleRelationFilter_1 = require("../inputs/RoleRelationFilter");
let RolePermissionsWhereUniqueInput = class RolePermissionsWhereUniqueInput {
};
exports.RolePermissionsWhereUniqueInput = RolePermissionsWhereUniqueInput;
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], RolePermissionsWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsRoleIdPermissionIdCompoundUniqueInput_1.RolePermissionsRoleIdPermissionIdCompoundUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsRoleIdPermissionIdCompoundUniqueInput_1.RolePermissionsRoleIdPermissionIdCompoundUniqueInput)
], RolePermissionsWhereUniqueInput.prototype, "roleId_permissionId", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [RolePermissionsWhereInput_1.RolePermissionsWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RolePermissionsWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [RolePermissionsWhereInput_1.RolePermissionsWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RolePermissionsWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [RolePermissionsWhereInput_1.RolePermissionsWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RolePermissionsWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], RolePermissionsWhereUniqueInput.prototype, "roleId", void 0);
__decorate([
    (0, graphql_1.Field)(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], RolePermissionsWhereUniqueInput.prototype, "permissionId", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleRelationFilter_1.RoleRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", RoleRelationFilter_1.RoleRelationFilter)
], RolePermissionsWhereUniqueInput.prototype, "Role", void 0);
__decorate([
    (0, graphql_1.Field)(_type => PermissionRelationFilter_1.PermissionRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", PermissionRelationFilter_1.PermissionRelationFilter)
], RolePermissionsWhereUniqueInput.prototype, "Permission", void 0);
exports.RolePermissionsWhereUniqueInput = RolePermissionsWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)("RolePermissionsWhereUniqueInput", {
        isAbstract: true
    })
], RolePermissionsWhereUniqueInput);
//# sourceMappingURL=RolePermissionsWhereUniqueInput.js.map
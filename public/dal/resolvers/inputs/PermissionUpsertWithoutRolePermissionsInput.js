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
exports.PermissionUpsertWithoutRolePermissionsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const PermissionCreateWithoutRolePermissionsInput_1 = require("../inputs/PermissionCreateWithoutRolePermissionsInput");
const PermissionUpdateWithoutRolePermissionsInput_1 = require("../inputs/PermissionUpdateWithoutRolePermissionsInput");
const PermissionWhereInput_1 = require("../inputs/PermissionWhereInput");
let PermissionUpsertWithoutRolePermissionsInput = class PermissionUpsertWithoutRolePermissionsInput {
};
exports.PermissionUpsertWithoutRolePermissionsInput = PermissionUpsertWithoutRolePermissionsInput;
__decorate([
    (0, graphql_1.Field)(_type => PermissionUpdateWithoutRolePermissionsInput_1.PermissionUpdateWithoutRolePermissionsInput, {
        nullable: false
    }),
    __metadata("design:type", PermissionUpdateWithoutRolePermissionsInput_1.PermissionUpdateWithoutRolePermissionsInput)
], PermissionUpsertWithoutRolePermissionsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(_type => PermissionCreateWithoutRolePermissionsInput_1.PermissionCreateWithoutRolePermissionsInput, {
        nullable: false
    }),
    __metadata("design:type", PermissionCreateWithoutRolePermissionsInput_1.PermissionCreateWithoutRolePermissionsInput)
], PermissionUpsertWithoutRolePermissionsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(_type => PermissionWhereInput_1.PermissionWhereInput, {
        nullable: true
    }),
    __metadata("design:type", PermissionWhereInput_1.PermissionWhereInput)
], PermissionUpsertWithoutRolePermissionsInput.prototype, "where", void 0);
exports.PermissionUpsertWithoutRolePermissionsInput = PermissionUpsertWithoutRolePermissionsInput = __decorate([
    (0, graphql_1.InputType)("PermissionUpsertWithoutRolePermissionsInput", {
        isAbstract: true
    })
], PermissionUpsertWithoutRolePermissionsInput);
//# sourceMappingURL=PermissionUpsertWithoutRolePermissionsInput.js.map
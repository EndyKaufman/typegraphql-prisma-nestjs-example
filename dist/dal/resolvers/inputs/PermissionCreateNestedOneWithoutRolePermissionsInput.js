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
exports.PermissionCreateNestedOneWithoutRolePermissionsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const PermissionCreateWithoutRolePermissionsInput_1 = require("../inputs/PermissionCreateWithoutRolePermissionsInput");
const PermissionWhereUniqueInput_1 = require("../inputs/PermissionWhereUniqueInput");
let PermissionCreateNestedOneWithoutRolePermissionsInput = class PermissionCreateNestedOneWithoutRolePermissionsInput {
};
exports.PermissionCreateNestedOneWithoutRolePermissionsInput = PermissionCreateNestedOneWithoutRolePermissionsInput;
__decorate([
    (0, graphql_1.Field)(_type => PermissionCreateWithoutRolePermissionsInput_1.PermissionCreateWithoutRolePermissionsInput, {
        nullable: true
    }),
    __metadata("design:type", PermissionCreateWithoutRolePermissionsInput_1.PermissionCreateWithoutRolePermissionsInput)
], PermissionCreateNestedOneWithoutRolePermissionsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(_type => PermissionWhereUniqueInput_1.PermissionWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", PermissionWhereUniqueInput_1.PermissionWhereUniqueInput)
], PermissionCreateNestedOneWithoutRolePermissionsInput.prototype, "connect", void 0);
exports.PermissionCreateNestedOneWithoutRolePermissionsInput = PermissionCreateNestedOneWithoutRolePermissionsInput = __decorate([
    (0, graphql_1.InputType)("PermissionCreateNestedOneWithoutRolePermissionsInput", {
        isAbstract: true
    })
], PermissionCreateNestedOneWithoutRolePermissionsInput);
//# sourceMappingURL=PermissionCreateNestedOneWithoutRolePermissionsInput.js.map
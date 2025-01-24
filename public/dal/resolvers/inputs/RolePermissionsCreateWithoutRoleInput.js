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
exports.RolePermissionsCreateWithoutRoleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const PermissionCreateNestedOneWithoutRolePermissionsInput_1 = require("../inputs/PermissionCreateNestedOneWithoutRolePermissionsInput");
let RolePermissionsCreateWithoutRoleInput = class RolePermissionsCreateWithoutRoleInput {
};
exports.RolePermissionsCreateWithoutRoleInput = RolePermissionsCreateWithoutRoleInput;
__decorate([
    (0, graphql_1.Field)(_type => PermissionCreateNestedOneWithoutRolePermissionsInput_1.PermissionCreateNestedOneWithoutRolePermissionsInput, {
        nullable: false
    }),
    __metadata("design:type", PermissionCreateNestedOneWithoutRolePermissionsInput_1.PermissionCreateNestedOneWithoutRolePermissionsInput)
], RolePermissionsCreateWithoutRoleInput.prototype, "Permission", void 0);
exports.RolePermissionsCreateWithoutRoleInput = RolePermissionsCreateWithoutRoleInput = __decorate([
    (0, graphql_1.InputType)("RolePermissionsCreateWithoutRoleInput", {
        isAbstract: true
    })
], RolePermissionsCreateWithoutRoleInput);
//# sourceMappingURL=RolePermissionsCreateWithoutRoleInput.js.map
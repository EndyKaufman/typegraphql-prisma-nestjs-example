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
exports.PermissionCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const RolePermissionsCreateNestedManyWithoutPermissionInput_1 = require("../inputs/RolePermissionsCreateNestedManyWithoutPermissionInput");
let PermissionCreateInput = class PermissionCreateInput {
};
exports.PermissionCreateInput = PermissionCreateInput;
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], PermissionCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsCreateNestedManyWithoutPermissionInput_1.RolePermissionsCreateNestedManyWithoutPermissionInput, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsCreateNestedManyWithoutPermissionInput_1.RolePermissionsCreateNestedManyWithoutPermissionInput)
], PermissionCreateInput.prototype, "RolePermissions", void 0);
exports.PermissionCreateInput = PermissionCreateInput = __decorate([
    (0, graphql_1.InputType)("PermissionCreateInput", {
        isAbstract: true
    })
], PermissionCreateInput);
//# sourceMappingURL=PermissionCreateInput.js.map
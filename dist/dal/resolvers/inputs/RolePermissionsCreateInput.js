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
exports.RolePermissionsCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const PermissionCreateNestedOneWithoutRolePermissionsInput_1 = require("../inputs/PermissionCreateNestedOneWithoutRolePermissionsInput");
const RoleCreateNestedOneWithoutRolePermissionsInput_1 = require("../inputs/RoleCreateNestedOneWithoutRolePermissionsInput");
let RolePermissionsCreateInput = class RolePermissionsCreateInput {
};
exports.RolePermissionsCreateInput = RolePermissionsCreateInput;
__decorate([
    (0, graphql_1.Field)(_type => RoleCreateNestedOneWithoutRolePermissionsInput_1.RoleCreateNestedOneWithoutRolePermissionsInput, {
        nullable: false
    }),
    __metadata("design:type", RoleCreateNestedOneWithoutRolePermissionsInput_1.RoleCreateNestedOneWithoutRolePermissionsInput)
], RolePermissionsCreateInput.prototype, "Role", void 0);
__decorate([
    (0, graphql_1.Field)(_type => PermissionCreateNestedOneWithoutRolePermissionsInput_1.PermissionCreateNestedOneWithoutRolePermissionsInput, {
        nullable: false
    }),
    __metadata("design:type", PermissionCreateNestedOneWithoutRolePermissionsInput_1.PermissionCreateNestedOneWithoutRolePermissionsInput)
], RolePermissionsCreateInput.prototype, "Permission", void 0);
exports.RolePermissionsCreateInput = RolePermissionsCreateInput = __decorate([
    (0, graphql_1.InputType)("RolePermissionsCreateInput", {
        isAbstract: true
    })
], RolePermissionsCreateInput);
//# sourceMappingURL=RolePermissionsCreateInput.js.map
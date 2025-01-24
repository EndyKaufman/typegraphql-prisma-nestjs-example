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
exports.RoleCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const RolePermissionsCreateNestedManyWithoutRoleInput_1 = require("../inputs/RolePermissionsCreateNestedManyWithoutRoleInput");
const UserCreateNestedManyWithoutRoleInput_1 = require("../inputs/UserCreateNestedManyWithoutRoleInput");
let RoleCreateInput = class RoleCreateInput {
};
exports.RoleCreateInput = RoleCreateInput;
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], RoleCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(_type => UserCreateNestedManyWithoutRoleInput_1.UserCreateNestedManyWithoutRoleInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateNestedManyWithoutRoleInput_1.UserCreateNestedManyWithoutRoleInput)
], RoleCreateInput.prototype, "User", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsCreateNestedManyWithoutRoleInput_1.RolePermissionsCreateNestedManyWithoutRoleInput, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsCreateNestedManyWithoutRoleInput_1.RolePermissionsCreateNestedManyWithoutRoleInput)
], RoleCreateInput.prototype, "RolePermissions", void 0);
exports.RoleCreateInput = RoleCreateInput = __decorate([
    (0, graphql_1.InputType)("RoleCreateInput", {
        isAbstract: true
    })
], RoleCreateInput);
//# sourceMappingURL=RoleCreateInput.js.map
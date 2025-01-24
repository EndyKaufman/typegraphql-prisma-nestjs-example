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
exports.RoleUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const RolePermissionsUpdateManyWithoutRoleNestedInput_1 = require("../inputs/RolePermissionsUpdateManyWithoutRoleNestedInput");
const UserUpdateManyWithoutRoleNestedInput_1 = require("../inputs/UserUpdateManyWithoutRoleNestedInput");
let RoleUpdateInput = class RoleUpdateInput {
};
exports.RoleUpdateInput = RoleUpdateInput;
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], RoleUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(_type => UserUpdateManyWithoutRoleNestedInput_1.UserUpdateManyWithoutRoleNestedInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateManyWithoutRoleNestedInput_1.UserUpdateManyWithoutRoleNestedInput)
], RoleUpdateInput.prototype, "User", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsUpdateManyWithoutRoleNestedInput_1.RolePermissionsUpdateManyWithoutRoleNestedInput, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsUpdateManyWithoutRoleNestedInput_1.RolePermissionsUpdateManyWithoutRoleNestedInput)
], RoleUpdateInput.prototype, "RolePermissions", void 0);
exports.RoleUpdateInput = RoleUpdateInput = __decorate([
    (0, graphql_1.InputType)("RoleUpdateInput", {
        isAbstract: true
    })
], RoleUpdateInput);
//# sourceMappingURL=RoleUpdateInput.js.map
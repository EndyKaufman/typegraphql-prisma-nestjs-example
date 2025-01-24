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
exports.RoleUpdateToOneWithWhereWithoutRolePermissionsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const RoleUpdateWithoutRolePermissionsInput_1 = require("../inputs/RoleUpdateWithoutRolePermissionsInput");
const RoleWhereInput_1 = require("../inputs/RoleWhereInput");
let RoleUpdateToOneWithWhereWithoutRolePermissionsInput = class RoleUpdateToOneWithWhereWithoutRolePermissionsInput {
};
exports.RoleUpdateToOneWithWhereWithoutRolePermissionsInput = RoleUpdateToOneWithWhereWithoutRolePermissionsInput;
__decorate([
    (0, graphql_1.Field)(_type => RoleWhereInput_1.RoleWhereInput, {
        nullable: true
    }),
    __metadata("design:type", RoleWhereInput_1.RoleWhereInput)
], RoleUpdateToOneWithWhereWithoutRolePermissionsInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleUpdateWithoutRolePermissionsInput_1.RoleUpdateWithoutRolePermissionsInput, {
        nullable: false
    }),
    __metadata("design:type", RoleUpdateWithoutRolePermissionsInput_1.RoleUpdateWithoutRolePermissionsInput)
], RoleUpdateToOneWithWhereWithoutRolePermissionsInput.prototype, "data", void 0);
exports.RoleUpdateToOneWithWhereWithoutRolePermissionsInput = RoleUpdateToOneWithWhereWithoutRolePermissionsInput = __decorate([
    (0, graphql_1.InputType)("RoleUpdateToOneWithWhereWithoutRolePermissionsInput", {
        isAbstract: true
    })
], RoleUpdateToOneWithWhereWithoutRolePermissionsInput);
//# sourceMappingURL=RoleUpdateToOneWithWhereWithoutRolePermissionsInput.js.map
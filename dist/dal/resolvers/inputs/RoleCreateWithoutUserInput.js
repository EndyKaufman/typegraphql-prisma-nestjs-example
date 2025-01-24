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
exports.RoleCreateWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const RolePermissionsCreateNestedManyWithoutRoleInput_1 = require("../inputs/RolePermissionsCreateNestedManyWithoutRoleInput");
let RoleCreateWithoutUserInput = class RoleCreateWithoutUserInput {
};
exports.RoleCreateWithoutUserInput = RoleCreateWithoutUserInput;
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], RoleCreateWithoutUserInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsCreateNestedManyWithoutRoleInput_1.RolePermissionsCreateNestedManyWithoutRoleInput, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsCreateNestedManyWithoutRoleInput_1.RolePermissionsCreateNestedManyWithoutRoleInput)
], RoleCreateWithoutUserInput.prototype, "RolePermissions", void 0);
exports.RoleCreateWithoutUserInput = RoleCreateWithoutUserInput = __decorate([
    (0, graphql_1.InputType)("RoleCreateWithoutUserInput", {
        isAbstract: true
    })
], RoleCreateWithoutUserInput);
//# sourceMappingURL=RoleCreateWithoutUserInput.js.map
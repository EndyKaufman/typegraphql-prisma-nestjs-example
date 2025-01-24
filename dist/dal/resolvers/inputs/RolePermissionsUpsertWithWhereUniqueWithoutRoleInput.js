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
exports.RolePermissionsUpsertWithWhereUniqueWithoutRoleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const RolePermissionsCreateWithoutRoleInput_1 = require("../inputs/RolePermissionsCreateWithoutRoleInput");
const RolePermissionsUpdateWithoutRoleInput_1 = require("../inputs/RolePermissionsUpdateWithoutRoleInput");
const RolePermissionsWhereUniqueInput_1 = require("../inputs/RolePermissionsWhereUniqueInput");
let RolePermissionsUpsertWithWhereUniqueWithoutRoleInput = class RolePermissionsUpsertWithWhereUniqueWithoutRoleInput {
};
exports.RolePermissionsUpsertWithWhereUniqueWithoutRoleInput = RolePermissionsUpsertWithWhereUniqueWithoutRoleInput;
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsWhereUniqueInput_1.RolePermissionsWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", RolePermissionsWhereUniqueInput_1.RolePermissionsWhereUniqueInput)
], RolePermissionsUpsertWithWhereUniqueWithoutRoleInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsUpdateWithoutRoleInput_1.RolePermissionsUpdateWithoutRoleInput, {
        nullable: false
    }),
    __metadata("design:type", RolePermissionsUpdateWithoutRoleInput_1.RolePermissionsUpdateWithoutRoleInput)
], RolePermissionsUpsertWithWhereUniqueWithoutRoleInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsCreateWithoutRoleInput_1.RolePermissionsCreateWithoutRoleInput, {
        nullable: false
    }),
    __metadata("design:type", RolePermissionsCreateWithoutRoleInput_1.RolePermissionsCreateWithoutRoleInput)
], RolePermissionsUpsertWithWhereUniqueWithoutRoleInput.prototype, "create", void 0);
exports.RolePermissionsUpsertWithWhereUniqueWithoutRoleInput = RolePermissionsUpsertWithWhereUniqueWithoutRoleInput = __decorate([
    (0, graphql_1.InputType)("RolePermissionsUpsertWithWhereUniqueWithoutRoleInput", {
        isAbstract: true
    })
], RolePermissionsUpsertWithWhereUniqueWithoutRoleInput);
//# sourceMappingURL=RolePermissionsUpsertWithWhereUniqueWithoutRoleInput.js.map
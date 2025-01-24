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
exports.RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const RolePermissionsCreateWithoutPermissionInput_1 = require("../inputs/RolePermissionsCreateWithoutPermissionInput");
const RolePermissionsUpdateWithoutPermissionInput_1 = require("../inputs/RolePermissionsUpdateWithoutPermissionInput");
const RolePermissionsWhereUniqueInput_1 = require("../inputs/RolePermissionsWhereUniqueInput");
let RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput = class RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput {
};
exports.RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput = RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput;
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsWhereUniqueInput_1.RolePermissionsWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", RolePermissionsWhereUniqueInput_1.RolePermissionsWhereUniqueInput)
], RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsUpdateWithoutPermissionInput_1.RolePermissionsUpdateWithoutPermissionInput, {
        nullable: false
    }),
    __metadata("design:type", RolePermissionsUpdateWithoutPermissionInput_1.RolePermissionsUpdateWithoutPermissionInput)
], RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsCreateWithoutPermissionInput_1.RolePermissionsCreateWithoutPermissionInput, {
        nullable: false
    }),
    __metadata("design:type", RolePermissionsCreateWithoutPermissionInput_1.RolePermissionsCreateWithoutPermissionInput)
], RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput.prototype, "create", void 0);
exports.RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput = RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput = __decorate([
    (0, graphql_1.InputType)("RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput", {
        isAbstract: true
    })
], RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput);
//# sourceMappingURL=RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput.js.map
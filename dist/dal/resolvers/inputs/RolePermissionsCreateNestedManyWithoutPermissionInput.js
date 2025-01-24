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
exports.RolePermissionsCreateNestedManyWithoutPermissionInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const RolePermissionsCreateManyPermissionInputEnvelope_1 = require("../inputs/RolePermissionsCreateManyPermissionInputEnvelope");
const RolePermissionsCreateWithoutPermissionInput_1 = require("../inputs/RolePermissionsCreateWithoutPermissionInput");
const RolePermissionsWhereUniqueInput_1 = require("../inputs/RolePermissionsWhereUniqueInput");
let RolePermissionsCreateNestedManyWithoutPermissionInput = class RolePermissionsCreateNestedManyWithoutPermissionInput {
};
exports.RolePermissionsCreateNestedManyWithoutPermissionInput = RolePermissionsCreateNestedManyWithoutPermissionInput;
__decorate([
    (0, graphql_1.Field)(_type => [RolePermissionsCreateWithoutPermissionInput_1.RolePermissionsCreateWithoutPermissionInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RolePermissionsCreateNestedManyWithoutPermissionInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsCreateManyPermissionInputEnvelope_1.RolePermissionsCreateManyPermissionInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsCreateManyPermissionInputEnvelope_1.RolePermissionsCreateManyPermissionInputEnvelope)
], RolePermissionsCreateNestedManyWithoutPermissionInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [RolePermissionsWhereUniqueInput_1.RolePermissionsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RolePermissionsCreateNestedManyWithoutPermissionInput.prototype, "connect", void 0);
exports.RolePermissionsCreateNestedManyWithoutPermissionInput = RolePermissionsCreateNestedManyWithoutPermissionInput = __decorate([
    (0, graphql_1.InputType)("RolePermissionsCreateNestedManyWithoutPermissionInput", {
        isAbstract: true
    })
], RolePermissionsCreateNestedManyWithoutPermissionInput);
//# sourceMappingURL=RolePermissionsCreateNestedManyWithoutPermissionInput.js.map
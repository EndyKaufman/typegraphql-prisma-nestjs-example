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
exports.RolePermissionsUpdateManyWithoutPermissionNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const RolePermissionsCreateManyPermissionInputEnvelope_1 = require("../inputs/RolePermissionsCreateManyPermissionInputEnvelope");
const RolePermissionsCreateWithoutPermissionInput_1 = require("../inputs/RolePermissionsCreateWithoutPermissionInput");
const RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput_1 = require("../inputs/RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput");
const RolePermissionsWhereUniqueInput_1 = require("../inputs/RolePermissionsWhereUniqueInput");
let RolePermissionsUpdateManyWithoutPermissionNestedInput = class RolePermissionsUpdateManyWithoutPermissionNestedInput {
};
exports.RolePermissionsUpdateManyWithoutPermissionNestedInput = RolePermissionsUpdateManyWithoutPermissionNestedInput;
__decorate([
    (0, graphql_1.Field)(_type => [RolePermissionsCreateWithoutPermissionInput_1.RolePermissionsCreateWithoutPermissionInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RolePermissionsUpdateManyWithoutPermissionNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsCreateManyPermissionInputEnvelope_1.RolePermissionsCreateManyPermissionInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsCreateManyPermissionInputEnvelope_1.RolePermissionsCreateManyPermissionInputEnvelope)
], RolePermissionsUpdateManyWithoutPermissionNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [RolePermissionsWhereUniqueInput_1.RolePermissionsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RolePermissionsUpdateManyWithoutPermissionNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [RolePermissionsWhereUniqueInput_1.RolePermissionsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RolePermissionsUpdateManyWithoutPermissionNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput_1.RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RolePermissionsUpdateManyWithoutPermissionNestedInput.prototype, "update", void 0);
exports.RolePermissionsUpdateManyWithoutPermissionNestedInput = RolePermissionsUpdateManyWithoutPermissionNestedInput = __decorate([
    (0, graphql_1.InputType)("RolePermissionsUpdateManyWithoutPermissionNestedInput", {
        isAbstract: true
    })
], RolePermissionsUpdateManyWithoutPermissionNestedInput);
//# sourceMappingURL=RolePermissionsUpdateManyWithoutPermissionNestedInput.js.map
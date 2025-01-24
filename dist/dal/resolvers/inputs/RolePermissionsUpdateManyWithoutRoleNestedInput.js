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
exports.RolePermissionsUpdateManyWithoutRoleNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const RolePermissionsCreateManyRoleInputEnvelope_1 = require("../inputs/RolePermissionsCreateManyRoleInputEnvelope");
const RolePermissionsCreateWithoutRoleInput_1 = require("../inputs/RolePermissionsCreateWithoutRoleInput");
const RolePermissionsUpdateWithWhereUniqueWithoutRoleInput_1 = require("../inputs/RolePermissionsUpdateWithWhereUniqueWithoutRoleInput");
const RolePermissionsWhereUniqueInput_1 = require("../inputs/RolePermissionsWhereUniqueInput");
let RolePermissionsUpdateManyWithoutRoleNestedInput = class RolePermissionsUpdateManyWithoutRoleNestedInput {
};
exports.RolePermissionsUpdateManyWithoutRoleNestedInput = RolePermissionsUpdateManyWithoutRoleNestedInput;
__decorate([
    (0, graphql_1.Field)(_type => [RolePermissionsCreateWithoutRoleInput_1.RolePermissionsCreateWithoutRoleInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RolePermissionsUpdateManyWithoutRoleNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsCreateManyRoleInputEnvelope_1.RolePermissionsCreateManyRoleInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsCreateManyRoleInputEnvelope_1.RolePermissionsCreateManyRoleInputEnvelope)
], RolePermissionsUpdateManyWithoutRoleNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [RolePermissionsWhereUniqueInput_1.RolePermissionsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RolePermissionsUpdateManyWithoutRoleNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [RolePermissionsWhereUniqueInput_1.RolePermissionsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RolePermissionsUpdateManyWithoutRoleNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [RolePermissionsUpdateWithWhereUniqueWithoutRoleInput_1.RolePermissionsUpdateWithWhereUniqueWithoutRoleInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RolePermissionsUpdateManyWithoutRoleNestedInput.prototype, "update", void 0);
exports.RolePermissionsUpdateManyWithoutRoleNestedInput = RolePermissionsUpdateManyWithoutRoleNestedInput = __decorate([
    (0, graphql_1.InputType)("RolePermissionsUpdateManyWithoutRoleNestedInput", {
        isAbstract: true
    })
], RolePermissionsUpdateManyWithoutRoleNestedInput);
//# sourceMappingURL=RolePermissionsUpdateManyWithoutRoleNestedInput.js.map
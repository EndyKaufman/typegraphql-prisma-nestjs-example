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
exports.UpsertOneRolePermissionsArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const RolePermissionsCreateInput_1 = require("../../../inputs/RolePermissionsCreateInput");
const RolePermissionsUpdateInput_1 = require("../../../inputs/RolePermissionsUpdateInput");
const RolePermissionsWhereUniqueInput_1 = require("../../../inputs/RolePermissionsWhereUniqueInput");
let UpsertOneRolePermissionsArgs = class UpsertOneRolePermissionsArgs {
};
exports.UpsertOneRolePermissionsArgs = UpsertOneRolePermissionsArgs;
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsWhereUniqueInput_1.RolePermissionsWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", RolePermissionsWhereUniqueInput_1.RolePermissionsWhereUniqueInput)
], UpsertOneRolePermissionsArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsCreateInput_1.RolePermissionsCreateInput, {
        nullable: false
    }),
    __metadata("design:type", RolePermissionsCreateInput_1.RolePermissionsCreateInput)
], UpsertOneRolePermissionsArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsUpdateInput_1.RolePermissionsUpdateInput, {
        nullable: false
    }),
    __metadata("design:type", RolePermissionsUpdateInput_1.RolePermissionsUpdateInput)
], UpsertOneRolePermissionsArgs.prototype, "update", void 0);
exports.UpsertOneRolePermissionsArgs = UpsertOneRolePermissionsArgs = __decorate([
    (0, graphql_1.ArgsType)()
], UpsertOneRolePermissionsArgs);
//# sourceMappingURL=UpsertOneRolePermissionsArgs.js.map
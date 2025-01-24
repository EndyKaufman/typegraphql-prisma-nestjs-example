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
exports.RoleRolePermissionsArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const RolePermissionsOrderByWithRelationInput_1 = require("../../../inputs/RolePermissionsOrderByWithRelationInput");
const RolePermissionsWhereInput_1 = require("../../../inputs/RolePermissionsWhereInput");
const RolePermissionsWhereUniqueInput_1 = require("../../../inputs/RolePermissionsWhereUniqueInput");
const RolePermissionsScalarFieldEnum_1 = require("../../../../enums/RolePermissionsScalarFieldEnum");
let RoleRolePermissionsArgs = class RoleRolePermissionsArgs {
};
exports.RoleRolePermissionsArgs = RoleRolePermissionsArgs;
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsWhereInput_1.RolePermissionsWhereInput, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsWhereInput_1.RolePermissionsWhereInput)
], RoleRolePermissionsArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [RolePermissionsOrderByWithRelationInput_1.RolePermissionsOrderByWithRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RoleRolePermissionsArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsWhereUniqueInput_1.RolePermissionsWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsWhereUniqueInput_1.RolePermissionsWhereUniqueInput)
], RoleRolePermissionsArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], RoleRolePermissionsArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], RoleRolePermissionsArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [RolePermissionsScalarFieldEnum_1.RolePermissionsScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RoleRolePermissionsArgs.prototype, "distinct", void 0);
exports.RoleRolePermissionsArgs = RoleRolePermissionsArgs = __decorate([
    (0, graphql_1.ArgsType)()
], RoleRolePermissionsArgs);
//# sourceMappingURL=RoleRolePermissionsArgs.js.map
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
exports.FindManyRoleArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const RoleOrderByWithRelationInput_1 = require("../../../inputs/RoleOrderByWithRelationInput");
const RoleWhereInput_1 = require("../../../inputs/RoleWhereInput");
const RoleWhereUniqueInput_1 = require("../../../inputs/RoleWhereUniqueInput");
const RoleScalarFieldEnum_1 = require("../../../../enums/RoleScalarFieldEnum");
let FindManyRoleArgs = class FindManyRoleArgs {
};
exports.FindManyRoleArgs = FindManyRoleArgs;
__decorate([
    (0, graphql_1.Field)(_type => RoleWhereInput_1.RoleWhereInput, {
        nullable: true
    }),
    __metadata("design:type", RoleWhereInput_1.RoleWhereInput)
], FindManyRoleArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [RoleOrderByWithRelationInput_1.RoleOrderByWithRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindManyRoleArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], FindManyRoleArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindManyRoleArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindManyRoleArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [RoleScalarFieldEnum_1.RoleScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindManyRoleArgs.prototype, "distinct", void 0);
exports.FindManyRoleArgs = FindManyRoleArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindManyRoleArgs);
//# sourceMappingURL=FindManyRoleArgs.js.map
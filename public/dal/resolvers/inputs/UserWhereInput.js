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
exports.UserWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const RoleRelationFilter_1 = require("../inputs/RoleRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let UserWhereInput = class UserWhereInput {
};
exports.UserWhereInput = UserWhereInput;
__decorate([
    (0, graphql_1.Field)(_type => [UserWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [UserWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [UserWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], UserWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserWhereInput.prototype, "lastLogin", void 0);
__decorate([
    (0, graphql_1.Field)(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolFilter_1.BoolFilter)
], UserWhereInput.prototype, "isSuperuser", void 0);
__decorate([
    (0, graphql_1.Field)(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolFilter_1.BoolFilter)
], UserWhereInput.prototype, "isStaff", void 0);
__decorate([
    (0, graphql_1.Field)(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolFilter_1.BoolFilter)
], UserWhereInput.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserWhereInput.prototype, "dateJoined", void 0);
__decorate([
    (0, graphql_1.Field)(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], UserWhereInput.prototype, "dateOfBirth", void 0);
__decorate([
    (0, graphql_1.Field)(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], UserWhereInput.prototype, "roleId", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleRelationFilter_1.RoleRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", RoleRelationFilter_1.RoleRelationFilter)
], UserWhereInput.prototype, "Role", void 0);
exports.UserWhereInput = UserWhereInput = __decorate([
    (0, graphql_1.InputType)("UserWhereInput", {
        isAbstract: true
    })
], UserWhereInput);
//# sourceMappingURL=UserWhereInput.js.map
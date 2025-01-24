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
exports.UserScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let UserScalarWhereInput = class UserScalarWhereInput {
};
exports.UserScalarWhereInput = UserScalarWhereInput;
__decorate([
    (0, graphql_1.Field)(_type => [UserScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [UserScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [UserScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], UserScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], UserScalarWhereInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserScalarWhereInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], UserScalarWhereInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserScalarWhereInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserScalarWhereInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserScalarWhereInput.prototype, "lastLogin", void 0);
__decorate([
    (0, graphql_1.Field)(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolFilter_1.BoolFilter)
], UserScalarWhereInput.prototype, "isSuperuser", void 0);
__decorate([
    (0, graphql_1.Field)(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolFilter_1.BoolFilter)
], UserScalarWhereInput.prototype, "isStaff", void 0);
__decorate([
    (0, graphql_1.Field)(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    __metadata("design:type", BoolFilter_1.BoolFilter)
], UserScalarWhereInput.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserScalarWhereInput.prototype, "dateJoined", void 0);
__decorate([
    (0, graphql_1.Field)(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], UserScalarWhereInput.prototype, "dateOfBirth", void 0);
__decorate([
    (0, graphql_1.Field)(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], UserScalarWhereInput.prototype, "roleId", void 0);
exports.UserScalarWhereInput = UserScalarWhereInput = __decorate([
    (0, graphql_1.InputType)("UserScalarWhereInput", {
        isAbstract: true
    })
], UserScalarWhereInput);
//# sourceMappingURL=UserScalarWhereInput.js.map
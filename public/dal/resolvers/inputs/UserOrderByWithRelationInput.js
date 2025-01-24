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
exports.UserOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const RoleOrderByWithRelationInput_1 = require("../inputs/RoleOrderByWithRelationInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
__decorate([
    (0, graphql_1.Field)(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    __metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    __metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    __metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "lastLogin", void 0);
__decorate([
    (0, graphql_1.Field)(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "isSuperuser", void 0);
__decorate([
    (0, graphql_1.Field)(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "isStaff", void 0);
__decorate([
    (0, graphql_1.Field)(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "dateJoined", void 0);
__decorate([
    (0, graphql_1.Field)(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    __metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserOrderByWithRelationInput.prototype, "dateOfBirth", void 0);
__decorate([
    (0, graphql_1.Field)(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "roleId", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleOrderByWithRelationInput_1.RoleOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", RoleOrderByWithRelationInput_1.RoleOrderByWithRelationInput)
], UserOrderByWithRelationInput.prototype, "Role", void 0);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)("UserOrderByWithRelationInput", {
        isAbstract: true
    })
], UserOrderByWithRelationInput);
//# sourceMappingURL=UserOrderByWithRelationInput.js.map
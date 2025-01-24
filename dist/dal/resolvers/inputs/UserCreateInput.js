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
exports.UserCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const RoleCreateNestedOneWithoutUserInput_1 = require("../inputs/RoleCreateNestedOneWithoutUserInput");
let UserCreateInput = class UserCreateInput {
};
exports.UserCreateInput = UserCreateInput;
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserCreateInput.prototype, "lastLogin", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], UserCreateInput.prototype, "isSuperuser", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], UserCreateInput.prototype, "isStaff", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], UserCreateInput.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserCreateInput.prototype, "dateJoined", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserCreateInput.prototype, "dateOfBirth", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleCreateNestedOneWithoutUserInput_1.RoleCreateNestedOneWithoutUserInput, {
        nullable: false
    }),
    __metadata("design:type", RoleCreateNestedOneWithoutUserInput_1.RoleCreateNestedOneWithoutUserInput)
], UserCreateInput.prototype, "Role", void 0);
exports.UserCreateInput = UserCreateInput = __decorate([
    (0, graphql_1.InputType)("UserCreateInput", {
        isAbstract: true
    })
], UserCreateInput);
//# sourceMappingURL=UserCreateInput.js.map
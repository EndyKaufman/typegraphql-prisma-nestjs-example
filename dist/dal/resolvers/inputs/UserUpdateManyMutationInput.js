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
exports.UserUpdateManyMutationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let UserUpdateManyMutationInput = class UserUpdateManyMutationInput {
};
exports.UserUpdateManyMutationInput = UserUpdateManyMutationInput;
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserUpdateManyMutationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserUpdateManyMutationInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserUpdateManyMutationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserUpdateManyMutationInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserUpdateManyMutationInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserUpdateManyMutationInput.prototype, "lastLogin", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], UserUpdateManyMutationInput.prototype, "isSuperuser", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], UserUpdateManyMutationInput.prototype, "isStaff", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], UserUpdateManyMutationInput.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserUpdateManyMutationInput.prototype, "dateJoined", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserUpdateManyMutationInput.prototype, "dateOfBirth", void 0);
exports.UserUpdateManyMutationInput = UserUpdateManyMutationInput = __decorate([
    (0, graphql_1.InputType)("UserUpdateManyMutationInput", {
        isAbstract: true
    })
], UserUpdateManyMutationInput);
//# sourceMappingURL=UserUpdateManyMutationInput.js.map
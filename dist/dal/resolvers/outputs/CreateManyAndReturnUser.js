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
exports.CreateManyAndReturnUser = void 0;
const graphql_1 = require("@nestjs/graphql");
const Role_1 = require("../../models/Role");
let CreateManyAndReturnUser = class CreateManyAndReturnUser {
};
exports.CreateManyAndReturnUser = CreateManyAndReturnUser;
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], CreateManyAndReturnUser.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CreateManyAndReturnUser.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], CreateManyAndReturnUser.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], CreateManyAndReturnUser.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], CreateManyAndReturnUser.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], CreateManyAndReturnUser.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], CreateManyAndReturnUser.prototype, "lastLogin", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], CreateManyAndReturnUser.prototype, "isSuperuser", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], CreateManyAndReturnUser.prototype, "isStaff", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], CreateManyAndReturnUser.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], CreateManyAndReturnUser.prototype, "dateJoined", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], CreateManyAndReturnUser.prototype, "dateOfBirth", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], CreateManyAndReturnUser.prototype, "roleId", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Role_1.Role, {
        nullable: false
    }),
    __metadata("design:type", Role_1.Role)
], CreateManyAndReturnUser.prototype, "Role", void 0);
exports.CreateManyAndReturnUser = CreateManyAndReturnUser = __decorate([
    (0, graphql_1.ObjectType)("CreateManyAndReturnUser", {
        isAbstract: true
    })
], CreateManyAndReturnUser);
//# sourceMappingURL=CreateManyAndReturnUser.js.map
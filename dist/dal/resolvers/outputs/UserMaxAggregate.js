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
exports.UserMaxAggregate = void 0;
const graphql_1 = require("@nestjs/graphql");
let UserMaxAggregate = class UserMaxAggregate {
};
exports.UserMaxAggregate = UserMaxAggregate;
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], UserMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserMaxAggregate.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserMaxAggregate.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserMaxAggregate.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserMaxAggregate.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserMaxAggregate.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserMaxAggregate.prototype, "lastLogin", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], UserMaxAggregate.prototype, "isSuperuser", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], UserMaxAggregate.prototype, "isStaff", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], UserMaxAggregate.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserMaxAggregate.prototype, "dateJoined", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserMaxAggregate.prototype, "dateOfBirth", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], UserMaxAggregate.prototype, "roleId", void 0);
exports.UserMaxAggregate = UserMaxAggregate = __decorate([
    (0, graphql_1.ObjectType)("UserMaxAggregate", {
        isAbstract: true
    })
], UserMaxAggregate);
//# sourceMappingURL=UserMaxAggregate.js.map
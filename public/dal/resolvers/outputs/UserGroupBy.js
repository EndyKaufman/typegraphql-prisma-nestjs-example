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
exports.UserGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const UserAvgAggregate_1 = require("../outputs/UserAvgAggregate");
const UserCountAggregate_1 = require("../outputs/UserCountAggregate");
const UserMaxAggregate_1 = require("../outputs/UserMaxAggregate");
const UserMinAggregate_1 = require("../outputs/UserMinAggregate");
const UserSumAggregate_1 = require("../outputs/UserSumAggregate");
let UserGroupBy = class UserGroupBy {
};
exports.UserGroupBy = UserGroupBy;
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], UserGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], UserGroupBy.prototype, "lastLogin", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], UserGroupBy.prototype, "isSuperuser", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], UserGroupBy.prototype, "isStaff", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], UserGroupBy.prototype, "isActive", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], UserGroupBy.prototype, "dateJoined", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserGroupBy.prototype, "dateOfBirth", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], UserGroupBy.prototype, "roleId", void 0);
__decorate([
    (0, graphql_1.Field)(_type => UserCountAggregate_1.UserCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", UserCountAggregate_1.UserCountAggregate)
], UserGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(_type => UserAvgAggregate_1.UserAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", UserAvgAggregate_1.UserAvgAggregate)
], UserGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(_type => UserSumAggregate_1.UserSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", UserSumAggregate_1.UserSumAggregate)
], UserGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(_type => UserMinAggregate_1.UserMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", UserMinAggregate_1.UserMinAggregate)
], UserGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(_type => UserMaxAggregate_1.UserMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", UserMaxAggregate_1.UserMaxAggregate)
], UserGroupBy.prototype, "_max", void 0);
exports.UserGroupBy = UserGroupBy = __decorate([
    (0, graphql_1.ObjectType)("UserGroupBy", {
        isAbstract: true
    })
], UserGroupBy);
//# sourceMappingURL=UserGroupBy.js.map
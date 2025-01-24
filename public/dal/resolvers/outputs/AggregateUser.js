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
exports.AggregateUser = void 0;
const graphql_1 = require("@nestjs/graphql");
const UserAvgAggregate_1 = require("../outputs/UserAvgAggregate");
const UserCountAggregate_1 = require("../outputs/UserCountAggregate");
const UserMaxAggregate_1 = require("../outputs/UserMaxAggregate");
const UserMinAggregate_1 = require("../outputs/UserMinAggregate");
const UserSumAggregate_1 = require("../outputs/UserSumAggregate");
let AggregateUser = class AggregateUser {
};
exports.AggregateUser = AggregateUser;
__decorate([
    (0, graphql_1.Field)(_type => UserCountAggregate_1.UserCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", UserCountAggregate_1.UserCountAggregate)
], AggregateUser.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(_type => UserAvgAggregate_1.UserAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", UserAvgAggregate_1.UserAvgAggregate)
], AggregateUser.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(_type => UserSumAggregate_1.UserSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", UserSumAggregate_1.UserSumAggregate)
], AggregateUser.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(_type => UserMinAggregate_1.UserMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", UserMinAggregate_1.UserMinAggregate)
], AggregateUser.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(_type => UserMaxAggregate_1.UserMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", UserMaxAggregate_1.UserMaxAggregate)
], AggregateUser.prototype, "_max", void 0);
exports.AggregateUser = AggregateUser = __decorate([
    (0, graphql_1.ObjectType)("AggregateUser", {
        isAbstract: true
    })
], AggregateUser);
//# sourceMappingURL=AggregateUser.js.map
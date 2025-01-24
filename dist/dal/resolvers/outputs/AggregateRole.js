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
exports.AggregateRole = void 0;
const graphql_1 = require("@nestjs/graphql");
const RoleAvgAggregate_1 = require("../outputs/RoleAvgAggregate");
const RoleCountAggregate_1 = require("../outputs/RoleCountAggregate");
const RoleMaxAggregate_1 = require("../outputs/RoleMaxAggregate");
const RoleMinAggregate_1 = require("../outputs/RoleMinAggregate");
const RoleSumAggregate_1 = require("../outputs/RoleSumAggregate");
let AggregateRole = class AggregateRole {
};
exports.AggregateRole = AggregateRole;
__decorate([
    (0, graphql_1.Field)(_type => RoleCountAggregate_1.RoleCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", RoleCountAggregate_1.RoleCountAggregate)
], AggregateRole.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleAvgAggregate_1.RoleAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", RoleAvgAggregate_1.RoleAvgAggregate)
], AggregateRole.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleSumAggregate_1.RoleSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", RoleSumAggregate_1.RoleSumAggregate)
], AggregateRole.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleMinAggregate_1.RoleMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", RoleMinAggregate_1.RoleMinAggregate)
], AggregateRole.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleMaxAggregate_1.RoleMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", RoleMaxAggregate_1.RoleMaxAggregate)
], AggregateRole.prototype, "_max", void 0);
exports.AggregateRole = AggregateRole = __decorate([
    (0, graphql_1.ObjectType)("AggregateRole", {
        isAbstract: true
    })
], AggregateRole);
//# sourceMappingURL=AggregateRole.js.map
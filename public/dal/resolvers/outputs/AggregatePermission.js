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
exports.AggregatePermission = void 0;
const graphql_1 = require("@nestjs/graphql");
const PermissionAvgAggregate_1 = require("../outputs/PermissionAvgAggregate");
const PermissionCountAggregate_1 = require("../outputs/PermissionCountAggregate");
const PermissionMaxAggregate_1 = require("../outputs/PermissionMaxAggregate");
const PermissionMinAggregate_1 = require("../outputs/PermissionMinAggregate");
const PermissionSumAggregate_1 = require("../outputs/PermissionSumAggregate");
let AggregatePermission = class AggregatePermission {
};
exports.AggregatePermission = AggregatePermission;
__decorate([
    (0, graphql_1.Field)(_type => PermissionCountAggregate_1.PermissionCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", PermissionCountAggregate_1.PermissionCountAggregate)
], AggregatePermission.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(_type => PermissionAvgAggregate_1.PermissionAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", PermissionAvgAggregate_1.PermissionAvgAggregate)
], AggregatePermission.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(_type => PermissionSumAggregate_1.PermissionSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", PermissionSumAggregate_1.PermissionSumAggregate)
], AggregatePermission.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(_type => PermissionMinAggregate_1.PermissionMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", PermissionMinAggregate_1.PermissionMinAggregate)
], AggregatePermission.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(_type => PermissionMaxAggregate_1.PermissionMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", PermissionMaxAggregate_1.PermissionMaxAggregate)
], AggregatePermission.prototype, "_max", void 0);
exports.AggregatePermission = AggregatePermission = __decorate([
    (0, graphql_1.ObjectType)("AggregatePermission", {
        isAbstract: true
    })
], AggregatePermission);
//# sourceMappingURL=AggregatePermission.js.map
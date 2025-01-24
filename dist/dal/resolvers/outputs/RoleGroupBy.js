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
exports.RoleGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const RoleAvgAggregate_1 = require("../outputs/RoleAvgAggregate");
const RoleCountAggregate_1 = require("../outputs/RoleCountAggregate");
const RoleMaxAggregate_1 = require("../outputs/RoleMaxAggregate");
const RoleMinAggregate_1 = require("../outputs/RoleMinAggregate");
const RoleSumAggregate_1 = require("../outputs/RoleSumAggregate");
let RoleGroupBy = class RoleGroupBy {
};
exports.RoleGroupBy = RoleGroupBy;
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], RoleGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], RoleGroupBy.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleCountAggregate_1.RoleCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", RoleCountAggregate_1.RoleCountAggregate)
], RoleGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleAvgAggregate_1.RoleAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", RoleAvgAggregate_1.RoleAvgAggregate)
], RoleGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleSumAggregate_1.RoleSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", RoleSumAggregate_1.RoleSumAggregate)
], RoleGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleMinAggregate_1.RoleMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", RoleMinAggregate_1.RoleMinAggregate)
], RoleGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleMaxAggregate_1.RoleMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", RoleMaxAggregate_1.RoleMaxAggregate)
], RoleGroupBy.prototype, "_max", void 0);
exports.RoleGroupBy = RoleGroupBy = __decorate([
    (0, graphql_1.ObjectType)("RoleGroupBy", {
        isAbstract: true
    })
], RoleGroupBy);
//# sourceMappingURL=RoleGroupBy.js.map
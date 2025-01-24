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
exports.NestedStringWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const NestedStringFilter_1 = require("../inputs/NestedStringFilter");
let NestedStringWithAggregatesFilter = class NestedStringWithAggregatesFilter {
};
exports.NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter;
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [String], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NestedStringWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [String], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NestedStringWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(_type => NestedStringWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedStringWithAggregatesFilter)
], NestedStringWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedStringWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(_type => NestedStringFilter_1.NestedStringFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedStringFilter_1.NestedStringFilter)
], NestedStringWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(_type => NestedStringFilter_1.NestedStringFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedStringFilter_1.NestedStringFilter)
], NestedStringWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter = __decorate([
    (0, graphql_1.InputType)("NestedStringWithAggregatesFilter", {
        isAbstract: true
    })
], NestedStringWithAggregatesFilter);
//# sourceMappingURL=NestedStringWithAggregatesFilter.js.map
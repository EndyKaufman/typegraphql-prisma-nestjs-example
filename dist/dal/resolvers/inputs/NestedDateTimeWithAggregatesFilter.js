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
exports.NestedDateTimeWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const NestedDateTimeFilter_1 = require("../inputs/NestedDateTimeFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
let NestedDateTimeWithAggregatesFilter = class NestedDateTimeWithAggregatesFilter {
};
exports.NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter;
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], NestedDateTimeWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [Date], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NestedDateTimeWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [Date], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NestedDateTimeWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], NestedDateTimeWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], NestedDateTimeWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], NestedDateTimeWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], NestedDateTimeWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(_type => NestedDateTimeWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedDateTimeWithAggregatesFilter)
], NestedDateTimeWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedDateTimeWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(_type => NestedDateTimeFilter_1.NestedDateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedDateTimeFilter_1.NestedDateTimeFilter)
], NestedDateTimeWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(_type => NestedDateTimeFilter_1.NestedDateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedDateTimeFilter_1.NestedDateTimeFilter)
], NestedDateTimeWithAggregatesFilter.prototype, "_max", void 0);
exports.NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter = __decorate([
    (0, graphql_1.InputType)("NestedDateTimeWithAggregatesFilter", {
        isAbstract: true
    })
], NestedDateTimeWithAggregatesFilter);
//# sourceMappingURL=NestedDateTimeWithAggregatesFilter.js.map
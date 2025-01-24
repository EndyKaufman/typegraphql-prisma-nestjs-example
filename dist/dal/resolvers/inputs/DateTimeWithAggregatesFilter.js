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
exports.DateTimeWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const NestedDateTimeFilter_1 = require("../inputs/NestedDateTimeFilter");
const NestedDateTimeWithAggregatesFilter_1 = require("../inputs/NestedDateTimeWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
let DateTimeWithAggregatesFilter = class DateTimeWithAggregatesFilter {
};
exports.DateTimeWithAggregatesFilter = DateTimeWithAggregatesFilter;
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], DateTimeWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [Date], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DateTimeWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [Date], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DateTimeWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], DateTimeWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], DateTimeWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], DateTimeWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], DateTimeWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(_type => NestedDateTimeWithAggregatesFilter_1.NestedDateTimeWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedDateTimeWithAggregatesFilter_1.NestedDateTimeWithAggregatesFilter)
], DateTimeWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], DateTimeWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(_type => NestedDateTimeFilter_1.NestedDateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedDateTimeFilter_1.NestedDateTimeFilter)
], DateTimeWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(_type => NestedDateTimeFilter_1.NestedDateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedDateTimeFilter_1.NestedDateTimeFilter)
], DateTimeWithAggregatesFilter.prototype, "_max", void 0);
exports.DateTimeWithAggregatesFilter = DateTimeWithAggregatesFilter = __decorate([
    (0, graphql_1.InputType)("DateTimeWithAggregatesFilter", {
        isAbstract: true
    })
], DateTimeWithAggregatesFilter);
//# sourceMappingURL=DateTimeWithAggregatesFilter.js.map
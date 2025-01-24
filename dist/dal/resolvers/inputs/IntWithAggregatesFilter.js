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
exports.IntWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const NestedFloatFilter_1 = require("../inputs/NestedFloatFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const NestedIntWithAggregatesFilter_1 = require("../inputs/NestedIntWithAggregatesFilter");
let IntWithAggregatesFilter = class IntWithAggregatesFilter {
};
exports.IntWithAggregatesFilter = IntWithAggregatesFilter;
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], IntWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [graphql_1.Int], {
        nullable: true
    }),
    __metadata("design:type", Array)
], IntWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [graphql_1.Int], {
        nullable: true
    }),
    __metadata("design:type", Array)
], IntWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], IntWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], IntWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], IntWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], IntWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(_type => NestedIntWithAggregatesFilter_1.NestedIntWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedIntWithAggregatesFilter_1.NestedIntWithAggregatesFilter)
], IntWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], IntWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(_type => NestedFloatFilter_1.NestedFloatFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedFloatFilter_1.NestedFloatFilter)
], IntWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], IntWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], IntWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], IntWithAggregatesFilter.prototype, "_max", void 0);
exports.IntWithAggregatesFilter = IntWithAggregatesFilter = __decorate([
    (0, graphql_1.InputType)("IntWithAggregatesFilter", {
        isAbstract: true
    })
], IntWithAggregatesFilter);
//# sourceMappingURL=IntWithAggregatesFilter.js.map
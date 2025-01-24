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
exports.IntFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
let IntFilter = class IntFilter {
};
exports.IntFilter = IntFilter;
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], IntFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [graphql_1.Int], {
        nullable: true
    }),
    __metadata("design:type", Array)
], IntFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [graphql_1.Int], {
        nullable: true
    }),
    __metadata("design:type", Array)
], IntFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], IntFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], IntFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], IntFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], IntFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], IntFilter.prototype, "not", void 0);
exports.IntFilter = IntFilter = __decorate([
    (0, graphql_1.InputType)("IntFilter", {
        isAbstract: true
    })
], IntFilter);
//# sourceMappingURL=IntFilter.js.map
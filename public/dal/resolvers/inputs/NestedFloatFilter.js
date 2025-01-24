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
exports.NestedFloatFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
let NestedFloatFilter = class NestedFloatFilter {
};
exports.NestedFloatFilter = NestedFloatFilter;
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], NestedFloatFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [graphql_1.Float], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NestedFloatFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [graphql_1.Float], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NestedFloatFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], NestedFloatFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], NestedFloatFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], NestedFloatFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Float, {
        nullable: true
    }),
    __metadata("design:type", Number)
], NestedFloatFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(_type => NestedFloatFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedFloatFilter)
], NestedFloatFilter.prototype, "not", void 0);
exports.NestedFloatFilter = NestedFloatFilter = __decorate([
    (0, graphql_1.InputType)("NestedFloatFilter", {
        isAbstract: true
    })
], NestedFloatFilter);
//# sourceMappingURL=NestedFloatFilter.js.map
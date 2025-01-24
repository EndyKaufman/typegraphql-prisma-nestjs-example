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
exports.NestedStringNullableFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
let NestedStringNullableFilter = class NestedStringNullableFilter {
};
exports.NestedStringNullableFilter = NestedStringNullableFilter;
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], NestedStringNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [String], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NestedStringNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [String], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NestedStringNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], NestedStringNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], NestedStringNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], NestedStringNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], NestedStringNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], NestedStringNullableFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], NestedStringNullableFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], NestedStringNullableFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(_type => NestedStringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", NestedStringNullableFilter)
], NestedStringNullableFilter.prototype, "not", void 0);
exports.NestedStringNullableFilter = NestedStringNullableFilter = __decorate([
    (0, graphql_1.InputType)("NestedStringNullableFilter", {
        isAbstract: true
    })
], NestedStringNullableFilter);
//# sourceMappingURL=NestedStringNullableFilter.js.map
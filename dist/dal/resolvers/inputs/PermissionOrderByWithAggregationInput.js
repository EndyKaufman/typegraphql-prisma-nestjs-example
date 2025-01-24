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
exports.PermissionOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const PermissionAvgOrderByAggregateInput_1 = require("../inputs/PermissionAvgOrderByAggregateInput");
const PermissionCountOrderByAggregateInput_1 = require("../inputs/PermissionCountOrderByAggregateInput");
const PermissionMaxOrderByAggregateInput_1 = require("../inputs/PermissionMaxOrderByAggregateInput");
const PermissionMinOrderByAggregateInput_1 = require("../inputs/PermissionMinOrderByAggregateInput");
const PermissionSumOrderByAggregateInput_1 = require("../inputs/PermissionSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PermissionOrderByWithAggregationInput = class PermissionOrderByWithAggregationInput {
};
exports.PermissionOrderByWithAggregationInput = PermissionOrderByWithAggregationInput;
__decorate([
    (0, graphql_1.Field)(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], PermissionOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], PermissionOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(_type => PermissionCountOrderByAggregateInput_1.PermissionCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", PermissionCountOrderByAggregateInput_1.PermissionCountOrderByAggregateInput)
], PermissionOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(_type => PermissionAvgOrderByAggregateInput_1.PermissionAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", PermissionAvgOrderByAggregateInput_1.PermissionAvgOrderByAggregateInput)
], PermissionOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(_type => PermissionMaxOrderByAggregateInput_1.PermissionMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", PermissionMaxOrderByAggregateInput_1.PermissionMaxOrderByAggregateInput)
], PermissionOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(_type => PermissionMinOrderByAggregateInput_1.PermissionMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", PermissionMinOrderByAggregateInput_1.PermissionMinOrderByAggregateInput)
], PermissionOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(_type => PermissionSumOrderByAggregateInput_1.PermissionSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", PermissionSumOrderByAggregateInput_1.PermissionSumOrderByAggregateInput)
], PermissionOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.PermissionOrderByWithAggregationInput = PermissionOrderByWithAggregationInput = __decorate([
    (0, graphql_1.InputType)("PermissionOrderByWithAggregationInput", {
        isAbstract: true
    })
], PermissionOrderByWithAggregationInput);
//# sourceMappingURL=PermissionOrderByWithAggregationInput.js.map
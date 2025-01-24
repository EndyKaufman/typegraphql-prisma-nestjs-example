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
exports.RoleOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const RoleAvgOrderByAggregateInput_1 = require("../inputs/RoleAvgOrderByAggregateInput");
const RoleCountOrderByAggregateInput_1 = require("../inputs/RoleCountOrderByAggregateInput");
const RoleMaxOrderByAggregateInput_1 = require("../inputs/RoleMaxOrderByAggregateInput");
const RoleMinOrderByAggregateInput_1 = require("../inputs/RoleMinOrderByAggregateInput");
const RoleSumOrderByAggregateInput_1 = require("../inputs/RoleSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RoleOrderByWithAggregationInput = class RoleOrderByWithAggregationInput {
};
exports.RoleOrderByWithAggregationInput = RoleOrderByWithAggregationInput;
__decorate([
    (0, graphql_1.Field)(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], RoleOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], RoleOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleCountOrderByAggregateInput_1.RoleCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", RoleCountOrderByAggregateInput_1.RoleCountOrderByAggregateInput)
], RoleOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleAvgOrderByAggregateInput_1.RoleAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", RoleAvgOrderByAggregateInput_1.RoleAvgOrderByAggregateInput)
], RoleOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleMaxOrderByAggregateInput_1.RoleMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", RoleMaxOrderByAggregateInput_1.RoleMaxOrderByAggregateInput)
], RoleOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleMinOrderByAggregateInput_1.RoleMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", RoleMinOrderByAggregateInput_1.RoleMinOrderByAggregateInput)
], RoleOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleSumOrderByAggregateInput_1.RoleSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", RoleSumOrderByAggregateInput_1.RoleSumOrderByAggregateInput)
], RoleOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.RoleOrderByWithAggregationInput = RoleOrderByWithAggregationInput = __decorate([
    (0, graphql_1.InputType)("RoleOrderByWithAggregationInput", {
        isAbstract: true
    })
], RoleOrderByWithAggregationInput);
//# sourceMappingURL=RoleOrderByWithAggregationInput.js.map
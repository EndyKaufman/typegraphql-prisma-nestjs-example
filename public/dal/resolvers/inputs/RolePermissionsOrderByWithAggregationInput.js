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
exports.RolePermissionsOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const RolePermissionsAvgOrderByAggregateInput_1 = require("../inputs/RolePermissionsAvgOrderByAggregateInput");
const RolePermissionsCountOrderByAggregateInput_1 = require("../inputs/RolePermissionsCountOrderByAggregateInput");
const RolePermissionsMaxOrderByAggregateInput_1 = require("../inputs/RolePermissionsMaxOrderByAggregateInput");
const RolePermissionsMinOrderByAggregateInput_1 = require("../inputs/RolePermissionsMinOrderByAggregateInput");
const RolePermissionsSumOrderByAggregateInput_1 = require("../inputs/RolePermissionsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RolePermissionsOrderByWithAggregationInput = class RolePermissionsOrderByWithAggregationInput {
};
exports.RolePermissionsOrderByWithAggregationInput = RolePermissionsOrderByWithAggregationInput;
__decorate([
    (0, graphql_1.Field)(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], RolePermissionsOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], RolePermissionsOrderByWithAggregationInput.prototype, "roleId", void 0);
__decorate([
    (0, graphql_1.Field)(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], RolePermissionsOrderByWithAggregationInput.prototype, "permissionId", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsCountOrderByAggregateInput_1.RolePermissionsCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsCountOrderByAggregateInput_1.RolePermissionsCountOrderByAggregateInput)
], RolePermissionsOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsAvgOrderByAggregateInput_1.RolePermissionsAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsAvgOrderByAggregateInput_1.RolePermissionsAvgOrderByAggregateInput)
], RolePermissionsOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsMaxOrderByAggregateInput_1.RolePermissionsMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsMaxOrderByAggregateInput_1.RolePermissionsMaxOrderByAggregateInput)
], RolePermissionsOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsMinOrderByAggregateInput_1.RolePermissionsMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsMinOrderByAggregateInput_1.RolePermissionsMinOrderByAggregateInput)
], RolePermissionsOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsSumOrderByAggregateInput_1.RolePermissionsSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsSumOrderByAggregateInput_1.RolePermissionsSumOrderByAggregateInput)
], RolePermissionsOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.RolePermissionsOrderByWithAggregationInput = RolePermissionsOrderByWithAggregationInput = __decorate([
    (0, graphql_1.InputType)("RolePermissionsOrderByWithAggregationInput", {
        isAbstract: true
    })
], RolePermissionsOrderByWithAggregationInput);
//# sourceMappingURL=RolePermissionsOrderByWithAggregationInput.js.map
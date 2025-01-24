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
exports.RoleOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const RolePermissionsOrderByRelationAggregateInput_1 = require("../inputs/RolePermissionsOrderByRelationAggregateInput");
const UserOrderByRelationAggregateInput_1 = require("../inputs/UserOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RoleOrderByWithRelationInput = class RoleOrderByWithRelationInput {
};
exports.RoleOrderByWithRelationInput = RoleOrderByWithRelationInput;
__decorate([
    (0, graphql_1.Field)(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], RoleOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], RoleOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(_type => UserOrderByRelationAggregateInput_1.UserOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", UserOrderByRelationAggregateInput_1.UserOrderByRelationAggregateInput)
], RoleOrderByWithRelationInput.prototype, "User", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsOrderByRelationAggregateInput_1.RolePermissionsOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsOrderByRelationAggregateInput_1.RolePermissionsOrderByRelationAggregateInput)
], RoleOrderByWithRelationInput.prototype, "RolePermissions", void 0);
exports.RoleOrderByWithRelationInput = RoleOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)("RoleOrderByWithRelationInput", {
        isAbstract: true
    })
], RoleOrderByWithRelationInput);
//# sourceMappingURL=RoleOrderByWithRelationInput.js.map
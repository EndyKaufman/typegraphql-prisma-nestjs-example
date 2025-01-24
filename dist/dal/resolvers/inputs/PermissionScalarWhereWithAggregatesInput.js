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
exports.PermissionScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let PermissionScalarWhereWithAggregatesInput = class PermissionScalarWhereWithAggregatesInput {
};
exports.PermissionScalarWhereWithAggregatesInput = PermissionScalarWhereWithAggregatesInput;
__decorate([
    (0, graphql_1.Field)(_type => [PermissionScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PermissionScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [PermissionScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PermissionScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [PermissionScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], PermissionScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], PermissionScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], PermissionScalarWhereWithAggregatesInput.prototype, "name", void 0);
exports.PermissionScalarWhereWithAggregatesInput = PermissionScalarWhereWithAggregatesInput = __decorate([
    (0, graphql_1.InputType)("PermissionScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], PermissionScalarWhereWithAggregatesInput);
//# sourceMappingURL=PermissionScalarWhereWithAggregatesInput.js.map
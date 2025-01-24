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
exports.RoleScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let RoleScalarWhereWithAggregatesInput = class RoleScalarWhereWithAggregatesInput {
};
exports.RoleScalarWhereWithAggregatesInput = RoleScalarWhereWithAggregatesInput;
__decorate([
    (0, graphql_1.Field)(_type => [RoleScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RoleScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [RoleScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RoleScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [RoleScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], RoleScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], RoleScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], RoleScalarWhereWithAggregatesInput.prototype, "name", void 0);
exports.RoleScalarWhereWithAggregatesInput = RoleScalarWhereWithAggregatesInput = __decorate([
    (0, graphql_1.InputType)("RoleScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], RoleScalarWhereWithAggregatesInput);
//# sourceMappingURL=RoleScalarWhereWithAggregatesInput.js.map
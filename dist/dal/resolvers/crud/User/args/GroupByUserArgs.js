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
exports.GroupByUserArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const UserOrderByWithAggregationInput_1 = require("../../../inputs/UserOrderByWithAggregationInput");
const UserScalarWhereWithAggregatesInput_1 = require("../../../inputs/UserScalarWhereWithAggregatesInput");
const UserWhereInput_1 = require("../../../inputs/UserWhereInput");
const UserScalarFieldEnum_1 = require("../../../../enums/UserScalarFieldEnum");
let GroupByUserArgs = class GroupByUserArgs {
};
exports.GroupByUserArgs = GroupByUserArgs;
__decorate([
    (0, graphql_1.Field)(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    __metadata("design:type", UserWhereInput_1.UserWhereInput)
], GroupByUserArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [UserOrderByWithAggregationInput_1.UserOrderByWithAggregationInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], GroupByUserArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(_type => [UserScalarFieldEnum_1.UserScalarFieldEnum], {
        nullable: false
    }),
    __metadata("design:type", Array)
], GroupByUserArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(_type => UserScalarWhereWithAggregatesInput_1.UserScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    __metadata("design:type", UserScalarWhereWithAggregatesInput_1.UserScalarWhereWithAggregatesInput)
], GroupByUserArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupByUserArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupByUserArgs.prototype, "skip", void 0);
exports.GroupByUserArgs = GroupByUserArgs = __decorate([
    (0, graphql_1.ArgsType)()
], GroupByUserArgs);
//# sourceMappingURL=GroupByUserArgs.js.map
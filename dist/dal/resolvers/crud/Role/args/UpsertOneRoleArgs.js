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
exports.UpsertOneRoleArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const RoleCreateInput_1 = require("../../../inputs/RoleCreateInput");
const RoleUpdateInput_1 = require("../../../inputs/RoleUpdateInput");
const RoleWhereUniqueInput_1 = require("../../../inputs/RoleWhereUniqueInput");
let UpsertOneRoleArgs = class UpsertOneRoleArgs {
};
exports.UpsertOneRoleArgs = UpsertOneRoleArgs;
__decorate([
    (0, graphql_1.Field)(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], UpsertOneRoleArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleCreateInput_1.RoleCreateInput, {
        nullable: false
    }),
    __metadata("design:type", RoleCreateInput_1.RoleCreateInput)
], UpsertOneRoleArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleUpdateInput_1.RoleUpdateInput, {
        nullable: false
    }),
    __metadata("design:type", RoleUpdateInput_1.RoleUpdateInput)
], UpsertOneRoleArgs.prototype, "update", void 0);
exports.UpsertOneRoleArgs = UpsertOneRoleArgs = __decorate([
    (0, graphql_1.ArgsType)()
], UpsertOneRoleArgs);
//# sourceMappingURL=UpsertOneRoleArgs.js.map
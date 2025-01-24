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
exports.RolePermissionsGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const RolePermissionsAvgAggregate_1 = require("../outputs/RolePermissionsAvgAggregate");
const RolePermissionsCountAggregate_1 = require("../outputs/RolePermissionsCountAggregate");
const RolePermissionsMaxAggregate_1 = require("../outputs/RolePermissionsMaxAggregate");
const RolePermissionsMinAggregate_1 = require("../outputs/RolePermissionsMinAggregate");
const RolePermissionsSumAggregate_1 = require("../outputs/RolePermissionsSumAggregate");
let RolePermissionsGroupBy = class RolePermissionsGroupBy {
};
exports.RolePermissionsGroupBy = RolePermissionsGroupBy;
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], RolePermissionsGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], RolePermissionsGroupBy.prototype, "roleId", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], RolePermissionsGroupBy.prototype, "permissionId", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsCountAggregate_1.RolePermissionsCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsCountAggregate_1.RolePermissionsCountAggregate)
], RolePermissionsGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsAvgAggregate_1.RolePermissionsAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsAvgAggregate_1.RolePermissionsAvgAggregate)
], RolePermissionsGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsSumAggregate_1.RolePermissionsSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsSumAggregate_1.RolePermissionsSumAggregate)
], RolePermissionsGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsMinAggregate_1.RolePermissionsMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsMinAggregate_1.RolePermissionsMinAggregate)
], RolePermissionsGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RolePermissionsMaxAggregate_1.RolePermissionsMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", RolePermissionsMaxAggregate_1.RolePermissionsMaxAggregate)
], RolePermissionsGroupBy.prototype, "_max", void 0);
exports.RolePermissionsGroupBy = RolePermissionsGroupBy = __decorate([
    (0, graphql_1.ObjectType)("RolePermissionsGroupBy", {
        isAbstract: true
    })
], RolePermissionsGroupBy);
//# sourceMappingURL=RolePermissionsGroupBy.js.map
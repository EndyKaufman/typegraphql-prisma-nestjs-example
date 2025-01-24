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
exports.RolePermissionsOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const PermissionOrderByWithRelationInput_1 = require("../inputs/PermissionOrderByWithRelationInput");
const RoleOrderByWithRelationInput_1 = require("../inputs/RoleOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RolePermissionsOrderByWithRelationInput = class RolePermissionsOrderByWithRelationInput {
};
exports.RolePermissionsOrderByWithRelationInput = RolePermissionsOrderByWithRelationInput;
__decorate([
    (0, graphql_1.Field)(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], RolePermissionsOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], RolePermissionsOrderByWithRelationInput.prototype, "roleId", void 0);
__decorate([
    (0, graphql_1.Field)(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], RolePermissionsOrderByWithRelationInput.prototype, "permissionId", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleOrderByWithRelationInput_1.RoleOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", RoleOrderByWithRelationInput_1.RoleOrderByWithRelationInput)
], RolePermissionsOrderByWithRelationInput.prototype, "Role", void 0);
__decorate([
    (0, graphql_1.Field)(_type => PermissionOrderByWithRelationInput_1.PermissionOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", PermissionOrderByWithRelationInput_1.PermissionOrderByWithRelationInput)
], RolePermissionsOrderByWithRelationInput.prototype, "Permission", void 0);
exports.RolePermissionsOrderByWithRelationInput = RolePermissionsOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)("RolePermissionsOrderByWithRelationInput", {
        isAbstract: true
    })
], RolePermissionsOrderByWithRelationInput);
//# sourceMappingURL=RolePermissionsOrderByWithRelationInput.js.map
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
exports.RolePermissionsUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput_1 = require("../inputs/PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput");
const RoleUpdateOneRequiredWithoutRolePermissionsNestedInput_1 = require("../inputs/RoleUpdateOneRequiredWithoutRolePermissionsNestedInput");
let RolePermissionsUpdateInput = class RolePermissionsUpdateInput {
};
exports.RolePermissionsUpdateInput = RolePermissionsUpdateInput;
__decorate([
    (0, graphql_1.Field)(_type => RoleUpdateOneRequiredWithoutRolePermissionsNestedInput_1.RoleUpdateOneRequiredWithoutRolePermissionsNestedInput, {
        nullable: true
    }),
    __metadata("design:type", RoleUpdateOneRequiredWithoutRolePermissionsNestedInput_1.RoleUpdateOneRequiredWithoutRolePermissionsNestedInput)
], RolePermissionsUpdateInput.prototype, "Role", void 0);
__decorate([
    (0, graphql_1.Field)(_type => PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput_1.PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput, {
        nullable: true
    }),
    __metadata("design:type", PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput_1.PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput)
], RolePermissionsUpdateInput.prototype, "Permission", void 0);
exports.RolePermissionsUpdateInput = RolePermissionsUpdateInput = __decorate([
    (0, graphql_1.InputType)("RolePermissionsUpdateInput", {
        isAbstract: true
    })
], RolePermissionsUpdateInput);
//# sourceMappingURL=RolePermissionsUpdateInput.js.map
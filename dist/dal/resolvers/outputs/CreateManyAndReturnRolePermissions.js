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
exports.CreateManyAndReturnRolePermissions = void 0;
const graphql_1 = require("@nestjs/graphql");
const Permission_1 = require("../../models/Permission");
const Role_1 = require("../../models/Role");
let CreateManyAndReturnRolePermissions = class CreateManyAndReturnRolePermissions {
};
exports.CreateManyAndReturnRolePermissions = CreateManyAndReturnRolePermissions;
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], CreateManyAndReturnRolePermissions.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], CreateManyAndReturnRolePermissions.prototype, "roleId", void 0);
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], CreateManyAndReturnRolePermissions.prototype, "permissionId", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Role_1.Role, {
        nullable: false
    }),
    __metadata("design:type", Role_1.Role)
], CreateManyAndReturnRolePermissions.prototype, "Role", void 0);
__decorate([
    (0, graphql_1.Field)(_type => Permission_1.Permission, {
        nullable: false
    }),
    __metadata("design:type", Permission_1.Permission)
], CreateManyAndReturnRolePermissions.prototype, "Permission", void 0);
exports.CreateManyAndReturnRolePermissions = CreateManyAndReturnRolePermissions = __decorate([
    (0, graphql_1.ObjectType)("CreateManyAndReturnRolePermissions", {
        isAbstract: true
    })
], CreateManyAndReturnRolePermissions);
//# sourceMappingURL=CreateManyAndReturnRolePermissions.js.map
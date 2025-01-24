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
exports.Permission = void 0;
const graphql_1 = require("@nestjs/graphql");
const PermissionCount_1 = require("../resolvers/outputs/PermissionCount");
let Permission = class Permission {
};
exports.Permission = Permission;
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], Permission.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], Permission.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(_type => PermissionCount_1.PermissionCount, {
        nullable: true
    }),
    __metadata("design:type", PermissionCount_1.PermissionCount)
], Permission.prototype, "_count", void 0);
exports.Permission = Permission = __decorate([
    (0, graphql_1.ObjectType)("Permission", {
        isAbstract: true
    })
], Permission);
//# sourceMappingURL=Permission.js.map
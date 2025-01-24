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
exports.Role = void 0;
const graphql_1 = require("@nestjs/graphql");
const RoleCount_1 = require("../resolvers/outputs/RoleCount");
let Role = class Role {
};
exports.Role = Role;
__decorate([
    (0, graphql_1.Field)(_type => graphql_1.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], Role.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleCount_1.RoleCount, {
        nullable: true
    }),
    __metadata("design:type", RoleCount_1.RoleCount)
], Role.prototype, "_count", void 0);
exports.Role = Role = __decorate([
    (0, graphql_1.ObjectType)("Role", {
        isAbstract: true
    })
], Role);
//# sourceMappingURL=Role.js.map
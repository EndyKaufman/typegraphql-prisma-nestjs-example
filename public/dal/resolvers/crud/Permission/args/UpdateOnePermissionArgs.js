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
exports.UpdateOnePermissionArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const PermissionUpdateInput_1 = require("../../../inputs/PermissionUpdateInput");
const PermissionWhereUniqueInput_1 = require("../../../inputs/PermissionWhereUniqueInput");
let UpdateOnePermissionArgs = class UpdateOnePermissionArgs {
};
exports.UpdateOnePermissionArgs = UpdateOnePermissionArgs;
__decorate([
    (0, graphql_1.Field)(_type => PermissionUpdateInput_1.PermissionUpdateInput, {
        nullable: false
    }),
    __metadata("design:type", PermissionUpdateInput_1.PermissionUpdateInput)
], UpdateOnePermissionArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(_type => PermissionWhereUniqueInput_1.PermissionWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", PermissionWhereUniqueInput_1.PermissionWhereUniqueInput)
], UpdateOnePermissionArgs.prototype, "where", void 0);
exports.UpdateOnePermissionArgs = UpdateOnePermissionArgs = __decorate([
    (0, graphql_1.ArgsType)()
], UpdateOnePermissionArgs);
//# sourceMappingURL=UpdateOnePermissionArgs.js.map
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
exports.RoleUpdateToOneWithWhereWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const RoleUpdateWithoutUserInput_1 = require("../inputs/RoleUpdateWithoutUserInput");
const RoleWhereInput_1 = require("../inputs/RoleWhereInput");
let RoleUpdateToOneWithWhereWithoutUserInput = class RoleUpdateToOneWithWhereWithoutUserInput {
};
exports.RoleUpdateToOneWithWhereWithoutUserInput = RoleUpdateToOneWithWhereWithoutUserInput;
__decorate([
    (0, graphql_1.Field)(_type => RoleWhereInput_1.RoleWhereInput, {
        nullable: true
    }),
    __metadata("design:type", RoleWhereInput_1.RoleWhereInput)
], RoleUpdateToOneWithWhereWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleUpdateWithoutUserInput_1.RoleUpdateWithoutUserInput, {
        nullable: false
    }),
    __metadata("design:type", RoleUpdateWithoutUserInput_1.RoleUpdateWithoutUserInput)
], RoleUpdateToOneWithWhereWithoutUserInput.prototype, "data", void 0);
exports.RoleUpdateToOneWithWhereWithoutUserInput = RoleUpdateToOneWithWhereWithoutUserInput = __decorate([
    (0, graphql_1.InputType)("RoleUpdateToOneWithWhereWithoutUserInput", {
        isAbstract: true
    })
], RoleUpdateToOneWithWhereWithoutUserInput);
//# sourceMappingURL=RoleUpdateToOneWithWhereWithoutUserInput.js.map
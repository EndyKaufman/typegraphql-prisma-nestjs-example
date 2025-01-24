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
exports.RoleCreateNestedOneWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const RoleCreateWithoutUserInput_1 = require("../inputs/RoleCreateWithoutUserInput");
const RoleWhereUniqueInput_1 = require("../inputs/RoleWhereUniqueInput");
let RoleCreateNestedOneWithoutUserInput = class RoleCreateNestedOneWithoutUserInput {
};
exports.RoleCreateNestedOneWithoutUserInput = RoleCreateNestedOneWithoutUserInput;
__decorate([
    (0, graphql_1.Field)(_type => RoleCreateWithoutUserInput_1.RoleCreateWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", RoleCreateWithoutUserInput_1.RoleCreateWithoutUserInput)
], RoleCreateNestedOneWithoutUserInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], RoleCreateNestedOneWithoutUserInput.prototype, "connect", void 0);
exports.RoleCreateNestedOneWithoutUserInput = RoleCreateNestedOneWithoutUserInput = __decorate([
    (0, graphql_1.InputType)("RoleCreateNestedOneWithoutUserInput", {
        isAbstract: true
    })
], RoleCreateNestedOneWithoutUserInput);
//# sourceMappingURL=RoleCreateNestedOneWithoutUserInput.js.map
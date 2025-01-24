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
exports.RoleUpdateOneRequiredWithoutUserNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const RoleCreateWithoutUserInput_1 = require("../inputs/RoleCreateWithoutUserInput");
const RoleUpdateToOneWithWhereWithoutUserInput_1 = require("../inputs/RoleUpdateToOneWithWhereWithoutUserInput");
const RoleWhereUniqueInput_1 = require("../inputs/RoleWhereUniqueInput");
let RoleUpdateOneRequiredWithoutUserNestedInput = class RoleUpdateOneRequiredWithoutUserNestedInput {
};
exports.RoleUpdateOneRequiredWithoutUserNestedInput = RoleUpdateOneRequiredWithoutUserNestedInput;
__decorate([
    (0, graphql_1.Field)(_type => RoleCreateWithoutUserInput_1.RoleCreateWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", RoleCreateWithoutUserInput_1.RoleCreateWithoutUserInput)
], RoleUpdateOneRequiredWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleWhereUniqueInput_1.RoleWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", RoleWhereUniqueInput_1.RoleWhereUniqueInput)
], RoleUpdateOneRequiredWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(_type => RoleUpdateToOneWithWhereWithoutUserInput_1.RoleUpdateToOneWithWhereWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", RoleUpdateToOneWithWhereWithoutUserInput_1.RoleUpdateToOneWithWhereWithoutUserInput)
], RoleUpdateOneRequiredWithoutUserNestedInput.prototype, "update", void 0);
exports.RoleUpdateOneRequiredWithoutUserNestedInput = RoleUpdateOneRequiredWithoutUserNestedInput = __decorate([
    (0, graphql_1.InputType)("RoleUpdateOneRequiredWithoutUserNestedInput", {
        isAbstract: true
    })
], RoleUpdateOneRequiredWithoutUserNestedInput);
//# sourceMappingURL=RoleUpdateOneRequiredWithoutUserNestedInput.js.map
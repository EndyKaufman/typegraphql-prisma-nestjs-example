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
exports.UserUpdateManyWithWhereWithoutRoleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyMutationInput_1 = require("../inputs/UserUpdateManyMutationInput");
let UserUpdateManyWithWhereWithoutRoleInput = class UserUpdateManyWithWhereWithoutRoleInput {
};
exports.UserUpdateManyWithWhereWithoutRoleInput = UserUpdateManyWithWhereWithoutRoleInput;
__decorate([
    (0, graphql_1.Field)(_type => UserScalarWhereInput_1.UserScalarWhereInput, {
        nullable: false
    }),
    __metadata("design:type", UserScalarWhereInput_1.UserScalarWhereInput)
], UserUpdateManyWithWhereWithoutRoleInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(_type => UserUpdateManyMutationInput_1.UserUpdateManyMutationInput, {
        nullable: false
    }),
    __metadata("design:type", UserUpdateManyMutationInput_1.UserUpdateManyMutationInput)
], UserUpdateManyWithWhereWithoutRoleInput.prototype, "data", void 0);
exports.UserUpdateManyWithWhereWithoutRoleInput = UserUpdateManyWithWhereWithoutRoleInput = __decorate([
    (0, graphql_1.InputType)("UserUpdateManyWithWhereWithoutRoleInput", {
        isAbstract: true
    })
], UserUpdateManyWithWhereWithoutRoleInput);
//# sourceMappingURL=UserUpdateManyWithWhereWithoutRoleInput.js.map
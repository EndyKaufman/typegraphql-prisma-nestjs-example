"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateScalar = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("graphql");
let DateScalar = class DateScalar {
    constructor() {
        this.description = 'Date custom scalar type';
    }
    parseValue(value) {
        return new Date(value);
    }
    serialize(value) {
        return value.getTime();
    }
    parseLiteral(ast) {
        if (ast.kind === graphql_2.Kind.INT) {
            return new Date(ast.value);
        }
        return null;
    }
};
exports.DateScalar = DateScalar;
exports.DateScalar = DateScalar = __decorate([
    (0, graphql_1.Scalar)('Date', (type) => Date)
], DateScalar);
//# sourceMappingURL=date.scalar.js.map
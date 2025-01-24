"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.relationResolvers = exports.crudResolvers = void 0;
const crudResolversImport = require("./resolvers/crud/resolvers-crud.index");
const relationResolversImport = require("./resolvers/relations/resolvers.index");
__exportStar(require("./enums"), exports);
__exportStar(require("./models"), exports);
__exportStar(require("./resolvers/crud"), exports);
exports.crudResolvers = Object.values(crudResolversImport);
__exportStar(require("./resolvers/relations"), exports);
exports.relationResolvers = Object.values(relationResolversImport);
__exportStar(require("./resolvers/inputs"), exports);
__exportStar(require("./resolvers/outputs"), exports);
__exportStar(require("./enhance"), exports);
__exportStar(require("./scalars"), exports);
exports.resolvers = [
    ...exports.crudResolvers,
    ...exports.relationResolvers,
];
//# sourceMappingURL=index.js.map
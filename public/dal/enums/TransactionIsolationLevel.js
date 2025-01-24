"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionIsolationLevel = void 0;
const graphql_1 = require("@nestjs/graphql");
var TransactionIsolationLevel;
(function (TransactionIsolationLevel) {
    TransactionIsolationLevel["Serializable"] = "Serializable";
})(TransactionIsolationLevel || (exports.TransactionIsolationLevel = TransactionIsolationLevel = {}));
(0, graphql_1.registerEnumType)(TransactionIsolationLevel, {
    name: "TransactionIsolationLevel",
    description: undefined,
});
//# sourceMappingURL=TransactionIsolationLevel.js.map
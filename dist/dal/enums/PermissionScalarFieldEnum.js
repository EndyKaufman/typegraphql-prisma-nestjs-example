"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var PermissionScalarFieldEnum;
(function (PermissionScalarFieldEnum) {
    PermissionScalarFieldEnum["id"] = "id";
    PermissionScalarFieldEnum["name"] = "name";
})(PermissionScalarFieldEnum || (exports.PermissionScalarFieldEnum = PermissionScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(PermissionScalarFieldEnum, {
    name: "PermissionScalarFieldEnum",
    description: undefined,
});
//# sourceMappingURL=PermissionScalarFieldEnum.js.map
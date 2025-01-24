"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolePermissionsScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var RolePermissionsScalarFieldEnum;
(function (RolePermissionsScalarFieldEnum) {
    RolePermissionsScalarFieldEnum["id"] = "id";
    RolePermissionsScalarFieldEnum["roleId"] = "roleId";
    RolePermissionsScalarFieldEnum["permissionId"] = "permissionId";
})(RolePermissionsScalarFieldEnum || (exports.RolePermissionsScalarFieldEnum = RolePermissionsScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(RolePermissionsScalarFieldEnum, {
    name: "RolePermissionsScalarFieldEnum",
    description: undefined,
});
//# sourceMappingURL=RolePermissionsScalarFieldEnum.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var RoleScalarFieldEnum;
(function (RoleScalarFieldEnum) {
    RoleScalarFieldEnum["id"] = "id";
    RoleScalarFieldEnum["name"] = "name";
})(RoleScalarFieldEnum || (exports.RoleScalarFieldEnum = RoleScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(RoleScalarFieldEnum, {
    name: "RoleScalarFieldEnum",
    description: undefined,
});
//# sourceMappingURL=RoleScalarFieldEnum.js.map
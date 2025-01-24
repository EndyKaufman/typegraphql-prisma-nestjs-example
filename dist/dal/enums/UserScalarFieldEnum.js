"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
    UserScalarFieldEnum["id"] = "id";
    UserScalarFieldEnum["email"] = "email";
    UserScalarFieldEnum["username"] = "username";
    UserScalarFieldEnum["password"] = "password";
    UserScalarFieldEnum["firstName"] = "firstName";
    UserScalarFieldEnum["lastName"] = "lastName";
    UserScalarFieldEnum["lastLogin"] = "lastLogin";
    UserScalarFieldEnum["isSuperuser"] = "isSuperuser";
    UserScalarFieldEnum["isStaff"] = "isStaff";
    UserScalarFieldEnum["isActive"] = "isActive";
    UserScalarFieldEnum["dateJoined"] = "dateJoined";
    UserScalarFieldEnum["dateOfBirth"] = "dateOfBirth";
    UserScalarFieldEnum["roleId"] = "roleId";
})(UserScalarFieldEnum || (exports.UserScalarFieldEnum = UserScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(UserScalarFieldEnum, {
    name: "UserScalarFieldEnum",
    description: undefined,
});
//# sourceMappingURL=UserScalarFieldEnum.js.map
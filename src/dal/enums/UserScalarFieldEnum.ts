import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum UserScalarFieldEnum {
  id = "id",
  email = "email",
  username = "username",
  password = "password",
  firstName = "firstName",
  lastName = "lastName",
  lastLogin = "lastLogin",
  isSuperuser = "isSuperuser",
  isStaff = "isStaff",
  isActive = "isActive",
  dateJoined = "dateJoined",
  dateOfBirth = "dateOfBirth"
}
registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});

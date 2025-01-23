import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyRoleInput } from "../inputs/UserCreateManyRoleInput";

@InputType("UserCreateManyRoleInputEnvelope", {
  isAbstract: true
})
export class UserCreateManyRoleInputEnvelope {
  @Field(_type => [UserCreateManyRoleInput], {
    nullable: false
  })
  data!: UserCreateManyRoleInput[];
}

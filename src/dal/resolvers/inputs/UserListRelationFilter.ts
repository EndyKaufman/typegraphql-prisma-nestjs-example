import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserWhereInput } from "../inputs/UserWhereInput";

@InputType("UserListRelationFilter", {
  isAbstract: true
})
export class UserListRelationFilter {
  @Field(_type => UserWhereInput, {
    nullable: true
  })
  every?: UserWhereInput | undefined;

  @Field(_type => UserWhereInput, {
    nullable: true
  })
  some?: UserWhereInput | undefined;

  @Field(_type => UserWhereInput, {
    nullable: true
  })
  none?: UserWhereInput | undefined;
}

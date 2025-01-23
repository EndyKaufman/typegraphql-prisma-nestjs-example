import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateWithoutUserInput } from "../inputs/RoleCreateWithoutUserInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";

@InputType("RoleCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class RoleCreateOrConnectWithoutUserInput {
  @Field(_type => RoleWhereUniqueInput, {
    nullable: false
  })
  where!: RoleWhereUniqueInput;

  @Field(_type => RoleCreateWithoutUserInput, {
    nullable: false
  })
  create!: RoleCreateWithoutUserInput;
}

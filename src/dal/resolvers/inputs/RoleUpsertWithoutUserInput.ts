import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateWithoutUserInput } from "../inputs/RoleCreateWithoutUserInput";
import { RoleUpdateWithoutUserInput } from "../inputs/RoleUpdateWithoutUserInput";
import { RoleWhereInput } from "../inputs/RoleWhereInput";

@InputType("RoleUpsertWithoutUserInput", {
  isAbstract: true
})
export class RoleUpsertWithoutUserInput {
  @Field(_type => RoleUpdateWithoutUserInput, {
    nullable: false
  })
  update!: RoleUpdateWithoutUserInput;

  @Field(_type => RoleCreateWithoutUserInput, {
    nullable: false
  })
  create!: RoleCreateWithoutUserInput;

  @Field(_type => RoleWhereInput, {
    nullable: true
  })
  where?: RoleWhereInput | undefined;
}

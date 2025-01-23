import { Args, ArgsType, Context, Field, Float, GqlExecutionContext, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleUpdateWithoutUserInput } from "../inputs/RoleUpdateWithoutUserInput";
import { RoleWhereInput } from "../inputs/RoleWhereInput";

@InputType("RoleUpdateToOneWithWhereWithoutUserInput", {
  isAbstract: true
})
export class RoleUpdateToOneWithWhereWithoutUserInput {
  @Field(_type => RoleWhereInput, {
    nullable: true
  })
  where?: RoleWhereInput | undefined;

  @Field(_type => RoleUpdateWithoutUserInput, {
    nullable: false
  })
  data!: RoleUpdateWithoutUserInput;
}

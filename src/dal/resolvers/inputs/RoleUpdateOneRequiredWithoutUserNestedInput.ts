import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateWithoutUserInput } from "../inputs/RoleCreateWithoutUserInput";
import { RoleUpdateToOneWithWhereWithoutUserInput } from "../inputs/RoleUpdateToOneWithWhereWithoutUserInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";

@InputType("RoleUpdateOneRequiredWithoutUserNestedInput", {
  isAbstract: true
})
export class RoleUpdateOneRequiredWithoutUserNestedInput {
  @Field(_type => RoleCreateWithoutUserInput, {
    nullable: true
  })
  create?: RoleCreateWithoutUserInput | undefined;

  @Field(_type => RoleWhereUniqueInput, {
    nullable: true
  })
  connect?: RoleWhereUniqueInput | undefined;

  @Field(_type => RoleUpdateToOneWithWhereWithoutUserInput, {
    nullable: true
  })
  update?: RoleUpdateToOneWithWhereWithoutUserInput | undefined;
}

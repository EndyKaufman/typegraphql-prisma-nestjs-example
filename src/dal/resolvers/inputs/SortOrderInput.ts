import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullsOrder } from "../../enums/NullsOrder";
import { SortOrder } from "../../enums/SortOrder";

@InputType("SortOrderInput", {
  isAbstract: true
})
export class SortOrderInput {
  @Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @Field(_type => NullsOrder, {
    nullable: true
  })
  nulls?: "first" | "last" | undefined;
}

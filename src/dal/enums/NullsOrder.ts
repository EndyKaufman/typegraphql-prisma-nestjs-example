import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum NullsOrder {
  first = "first",
  last = "last"
}
registerEnumType(NullsOrder, {
  name: "NullsOrder",
  description: undefined,
});

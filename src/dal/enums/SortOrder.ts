import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum SortOrder {
  asc = "asc",
  desc = "desc"
}
registerEnumType(SortOrder, {
  name: "SortOrder",
  description: undefined,
});

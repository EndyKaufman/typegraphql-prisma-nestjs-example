import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum TransactionIsolationLevel {
  Serializable = "Serializable"
}
registerEnumType(TransactionIsolationLevel, {
  name: "TransactionIsolationLevel",
  description: undefined,
});

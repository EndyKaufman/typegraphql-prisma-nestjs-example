import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@ObjectType("User", {
  isAbstract: true
})
export class User {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => String, {
    nullable: false
  })
  email!: string;

  @Field(_type => String, {
    nullable: true
  })
  username?: string | null;

  @Field(_type => String, {
    nullable: false
  })
  password!: string;

  @Field(_type => String, {
    nullable: true
  })
  firstName?: string | null;

  @Field(_type => String, {
    nullable: true
  })
  lastName?: string | null;

  @Field(_type => Date, {
    nullable: false
  })
  lastLogin!: Date;

  @Field(_type => Boolean, {
    nullable: false
  })
  isSuperuser!: boolean;

  @Field(_type => Boolean, {
    nullable: false
  })
  isStaff!: boolean;

  @Field(_type => Boolean, {
    nullable: false
  })
  isActive!: boolean;

  @Field(_type => Date, {
    nullable: false
  })
  dateJoined!: Date;

  @Field(_type => Date, {
    nullable: true
  })
  dateOfBirth?: Date | null;
}

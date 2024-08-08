import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@InputType("UserCreateManyInput", {
  isAbstract: true
})
export class UserCreateManyInput {
  @Field(_type => Int, {
    nullable: true
  })
  id?: number | undefined;

  @Field(_type => String, {
    nullable: false
  })
  email!: string;

  @Field(_type => String, {
    nullable: true
  })
  username?: string | undefined;

  @Field(_type => String, {
    nullable: false
  })
  password!: string;

  @Field(_type => String, {
    nullable: true
  })
  firstName?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  lastName?: string | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  lastLogin?: Date | undefined;

  @Field(_type => Boolean, {
    nullable: true
  })
  isSuperuser?: boolean | undefined;

  @Field(_type => Boolean, {
    nullable: true
  })
  isStaff?: boolean | undefined;

  @Field(_type => Boolean, {
    nullable: true
  })
  isActive?: boolean | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  dateJoined?: Date | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  dateOfBirth?: Date | undefined;
}

import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserAvgAggregate } from "../outputs/UserAvgAggregate";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
import { UserSumAggregate } from "../outputs/UserSumAggregate";

@ObjectType("UserGroupBy", {
  isAbstract: true
})
export class UserGroupBy {
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
  username!: string | null;

  @Field(_type => String, {
    nullable: false
  })
  password!: string;

  @Field(_type => String, {
    nullable: true
  })
  firstName!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  lastName!: string | null;

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
  dateOfBirth!: Date | null;

  @Field(_type => UserCountAggregate, {
    nullable: true
  })
  _count!: UserCountAggregate | null;

  @Field(_type => UserAvgAggregate, {
    nullable: true
  })
  _avg!: UserAvgAggregate | null;

  @Field(_type => UserSumAggregate, {
    nullable: true
  })
  _sum!: UserSumAggregate | null;

  @Field(_type => UserMinAggregate, {
    nullable: true
  })
  _min!: UserMinAggregate | null;

  @Field(_type => UserMaxAggregate, {
    nullable: true
  })
  _max!: UserMaxAggregate | null;
}

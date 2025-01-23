import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Role: crudResolvers.RoleCrudResolver,
  Permission: crudResolvers.PermissionCrudResolver,
  RolePermissions: crudResolvers.RolePermissionsCrudResolver
};
const actionResolversMap = {
  User: {
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Role: {
    createOneRole: actionResolvers.CreateOneRoleResolver,
    deleteOneRole: actionResolvers.DeleteOneRoleResolver,
    findFirstRole: actionResolvers.FindFirstRoleResolver,
    findFirstRoleOrThrow: actionResolvers.FindFirstRoleOrThrowResolver,
    roles: actionResolvers.FindManyRoleResolver,
    updateOneRole: actionResolvers.UpdateOneRoleResolver,
    upsertOneRole: actionResolvers.UpsertOneRoleResolver
  },
  Permission: {
    createOnePermission: actionResolvers.CreateOnePermissionResolver,
    deleteOnePermission: actionResolvers.DeleteOnePermissionResolver,
    findFirstPermission: actionResolvers.FindFirstPermissionResolver,
    findFirstPermissionOrThrow: actionResolvers.FindFirstPermissionOrThrowResolver,
    permissions: actionResolvers.FindManyPermissionResolver,
    updateOnePermission: actionResolvers.UpdateOnePermissionResolver,
    upsertOnePermission: actionResolvers.UpsertOnePermissionResolver
  },
  RolePermissions: {
    createOneRolePermissions: actionResolvers.CreateOneRolePermissionsResolver,
    deleteOneRolePermissions: actionResolvers.DeleteOneRolePermissionsResolver,
    findFirstRolePermissions: actionResolvers.FindFirstRolePermissionsResolver,
    findFirstRolePermissionsOrThrow: actionResolvers.FindFirstRolePermissionsOrThrowResolver,
    findManyRolePermissions: actionResolvers.FindManyRolePermissionsResolver,
    updateOneRolePermissions: actionResolvers.UpdateOneRolePermissionsResolver,
    upsertOneRolePermissions: actionResolvers.UpsertOneRolePermissionsResolver
  }
};
const crudResolversInfo = {
  User: ["createOneUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "updateOneUser", "upsertOneUser"],
  Role: ["createOneRole", "deleteOneRole", "findFirstRole", "findFirstRoleOrThrow", "roles", "updateOneRole", "upsertOneRole"],
  Permission: ["createOnePermission", "deleteOnePermission", "findFirstPermission", "findFirstPermissionOrThrow", "permissions", "updateOnePermission", "upsertOnePermission"],
  RolePermissions: ["createOneRolePermissions", "deleteOneRolePermissions", "findFirstRolePermissions", "findFirstRolePermissionsOrThrow", "findManyRolePermissions", "updateOneRolePermissions", "upsertOneRolePermissions"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data"],
  CreateManyAndReturnUserArgs: ["data"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateRoleArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyRoleArgs: ["data"],
  CreateManyAndReturnRoleArgs: ["data"],
  CreateOneRoleArgs: ["data"],
  DeleteManyRoleArgs: ["where"],
  DeleteOneRoleArgs: ["where"],
  FindFirstRoleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstRoleOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRoleArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueRoleArgs: ["where"],
  FindUniqueRoleOrThrowArgs: ["where"],
  GroupByRoleArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyRoleArgs: ["data", "where"],
  UpdateOneRoleArgs: ["data", "where"],
  UpsertOneRoleArgs: ["where", "create", "update"],
  AggregatePermissionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPermissionArgs: ["data"],
  CreateManyAndReturnPermissionArgs: ["data"],
  CreateOnePermissionArgs: ["data"],
  DeleteManyPermissionArgs: ["where"],
  DeleteOnePermissionArgs: ["where"],
  FindFirstPermissionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPermissionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPermissionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePermissionArgs: ["where"],
  FindUniquePermissionOrThrowArgs: ["where"],
  GroupByPermissionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPermissionArgs: ["data", "where"],
  UpdateOnePermissionArgs: ["data", "where"],
  UpsertOnePermissionArgs: ["where", "create", "update"],
  AggregateRolePermissionsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyRolePermissionsArgs: ["data"],
  CreateManyAndReturnRolePermissionsArgs: ["data"],
  CreateOneRolePermissionsArgs: ["data"],
  DeleteManyRolePermissionsArgs: ["where"],
  DeleteOneRolePermissionsArgs: ["where"],
  FindFirstRolePermissionsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstRolePermissionsOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRolePermissionsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueRolePermissionsArgs: ["where"],
  FindUniqueRolePermissionsOrThrowArgs: ["where"],
  GroupByRolePermissionsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyRolePermissionsArgs: ["data", "where"],
  UpdateOneRolePermissionsArgs: ["data", "where"],
  UpsertOneRolePermissionsArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "createManyAndReturn", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Role: relationResolvers.RoleRelationsResolver,
  Permission: relationResolvers.PermissionRelationsResolver,
  RolePermissions: relationResolvers.RolePermissionsRelationsResolver
};
const relationResolversInfo = {
  User: ["Role"],
  Role: ["User", "RolePermissions"],
  Permission: ["RolePermissions"],
  RolePermissions: ["Role", "Permission"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

export const modelsInfo = {
  User: ["id", "email", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth", "roleId"],
  Role: ["id", "name"],
  Permission: ["id", "name"],
  RolePermissions: ["id", "roleId", "permissionId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "email", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth", "roleId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateRole: ["_count", "_avg", "_sum", "_min", "_max"],
  RoleGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePermission: ["_count", "_avg", "_sum", "_min", "_max"],
  PermissionGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateRolePermissions: ["_count", "_avg", "_sum", "_min", "_max"],
  RolePermissionsGroupBy: ["id", "roleId", "permissionId", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCountAggregate: ["id", "email", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth", "roleId", "_all"],
  UserAvgAggregate: ["id", "roleId"],
  UserSumAggregate: ["id", "roleId"],
  UserMinAggregate: ["id", "email", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth", "roleId"],
  UserMaxAggregate: ["id", "email", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth", "roleId"],
  RoleCount: ["User", "RolePermissions"],
  RoleCountAggregate: ["id", "name", "_all"],
  RoleAvgAggregate: ["id"],
  RoleSumAggregate: ["id"],
  RoleMinAggregate: ["id", "name"],
  RoleMaxAggregate: ["id", "name"],
  PermissionCount: ["RolePermissions"],
  PermissionCountAggregate: ["id", "name", "_all"],
  PermissionAvgAggregate: ["id"],
  PermissionSumAggregate: ["id"],
  PermissionMinAggregate: ["id", "name"],
  PermissionMaxAggregate: ["id", "name"],
  RolePermissionsCountAggregate: ["id", "roleId", "permissionId", "_all"],
  RolePermissionsAvgAggregate: ["id", "roleId", "permissionId"],
  RolePermissionsSumAggregate: ["id", "roleId", "permissionId"],
  RolePermissionsMinAggregate: ["id", "roleId", "permissionId"],
  RolePermissionsMaxAggregate: ["id", "roleId", "permissionId"],
  CreateManyAndReturnUser: ["id", "email", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth", "roleId", "Role"],
  CreateManyAndReturnRole: ["id", "name"],
  CreateManyAndReturnPermission: ["id", "name"],
  CreateManyAndReturnRolePermissions: ["id", "roleId", "permissionId", "Role", "Permission"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth", "roleId", "Role"],
  UserOrderByWithRelationInput: ["id", "email", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth", "roleId", "Role"],
  UserWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth", "roleId", "Role"],
  UserOrderByWithAggregationInput: ["id", "email", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth", "roleId", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth", "roleId"],
  RoleWhereInput: ["AND", "OR", "NOT", "id", "name", "User", "RolePermissions"],
  RoleOrderByWithRelationInput: ["id", "name", "User", "RolePermissions"],
  RoleWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "User", "RolePermissions"],
  RoleOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  RoleScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  PermissionWhereInput: ["AND", "OR", "NOT", "id", "name", "RolePermissions"],
  PermissionOrderByWithRelationInput: ["id", "name", "RolePermissions"],
  PermissionWhereUniqueInput: ["id", "name", "AND", "OR", "NOT", "RolePermissions"],
  PermissionOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  PermissionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  RolePermissionsWhereInput: ["AND", "OR", "NOT", "id", "roleId", "permissionId", "Role", "Permission"],
  RolePermissionsOrderByWithRelationInput: ["id", "roleId", "permissionId", "Role", "Permission"],
  RolePermissionsWhereUniqueInput: ["id", "roleId_permissionId", "AND", "OR", "NOT", "roleId", "permissionId", "Role", "Permission"],
  RolePermissionsOrderByWithAggregationInput: ["id", "roleId", "permissionId", "_count", "_avg", "_max", "_min", "_sum"],
  RolePermissionsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "roleId", "permissionId"],
  UserCreateInput: ["email", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth", "Role"],
  UserUpdateInput: ["email", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth", "Role"],
  UserCreateManyInput: ["id", "email", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth", "roleId"],
  UserUpdateManyMutationInput: ["email", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth"],
  RoleCreateInput: ["name", "User", "RolePermissions"],
  RoleUpdateInput: ["name", "User", "RolePermissions"],
  RoleCreateManyInput: ["id", "name"],
  RoleUpdateManyMutationInput: ["name"],
  PermissionCreateInput: ["name", "RolePermissions"],
  PermissionUpdateInput: ["name", "RolePermissions"],
  PermissionCreateManyInput: ["id", "name"],
  PermissionUpdateManyMutationInput: ["name"],
  RolePermissionsCreateInput: ["Role", "Permission"],
  RolePermissionsUpdateInput: ["Role", "Permission"],
  RolePermissionsCreateManyInput: ["id", "roleId", "permissionId"],
  RolePermissionsUpdateManyMutationInput: [],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  RoleRelationFilter: ["is", "isNot"],
  SortOrderInput: ["sort", "nulls"],
  UserCountOrderByAggregateInput: ["id", "email", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth", "roleId"],
  UserAvgOrderByAggregateInput: ["id", "roleId"],
  UserMaxOrderByAggregateInput: ["id", "email", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth", "roleId"],
  UserMinOrderByAggregateInput: ["id", "email", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth", "roleId"],
  UserSumOrderByAggregateInput: ["id", "roleId"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  UserListRelationFilter: ["every", "some", "none"],
  RolePermissionsListRelationFilter: ["every", "some", "none"],
  UserOrderByRelationAggregateInput: ["_count"],
  RolePermissionsOrderByRelationAggregateInput: ["_count"],
  RoleCountOrderByAggregateInput: ["id", "name"],
  RoleAvgOrderByAggregateInput: ["id"],
  RoleMaxOrderByAggregateInput: ["id", "name"],
  RoleMinOrderByAggregateInput: ["id", "name"],
  RoleSumOrderByAggregateInput: ["id"],
  PermissionCountOrderByAggregateInput: ["id", "name"],
  PermissionAvgOrderByAggregateInput: ["id"],
  PermissionMaxOrderByAggregateInput: ["id", "name"],
  PermissionMinOrderByAggregateInput: ["id", "name"],
  PermissionSumOrderByAggregateInput: ["id"],
  PermissionRelationFilter: ["is", "isNot"],
  RolePermissionsRoleIdPermissionIdCompoundUniqueInput: ["roleId", "permissionId"],
  RolePermissionsCountOrderByAggregateInput: ["id", "roleId", "permissionId"],
  RolePermissionsAvgOrderByAggregateInput: ["id", "roleId", "permissionId"],
  RolePermissionsMaxOrderByAggregateInput: ["id", "roleId", "permissionId"],
  RolePermissionsMinOrderByAggregateInput: ["id", "roleId", "permissionId"],
  RolePermissionsSumOrderByAggregateInput: ["id", "roleId", "permissionId"],
  RoleCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  RoleUpdateOneRequiredWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedManyWithoutRoleInput: ["create", "connectOrCreate", "createMany", "connect"],
  RolePermissionsCreateNestedManyWithoutRoleInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateManyWithoutRoleNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  RolePermissionsUpdateManyWithoutRoleNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  RolePermissionsCreateNestedManyWithoutPermissionInput: ["create", "connectOrCreate", "createMany", "connect"],
  RolePermissionsUpdateManyWithoutPermissionNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  RoleCreateNestedOneWithoutRolePermissionsInput: ["create", "connectOrCreate", "connect"],
  PermissionCreateNestedOneWithoutRolePermissionsInput: ["create", "connectOrCreate", "connect"],
  RoleUpdateOneRequiredWithoutRolePermissionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  RoleCreateWithoutUserInput: ["name", "RolePermissions"],
  RoleCreateOrConnectWithoutUserInput: ["where", "create"],
  RoleUpsertWithoutUserInput: ["update", "create", "where"],
  RoleUpdateToOneWithWhereWithoutUserInput: ["where", "data"],
  RoleUpdateWithoutUserInput: ["name", "RolePermissions"],
  UserCreateWithoutRoleInput: ["email", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth"],
  UserCreateOrConnectWithoutRoleInput: ["where", "create"],
  UserCreateManyRoleInputEnvelope: ["data"],
  RolePermissionsCreateWithoutRoleInput: ["Permission"],
  RolePermissionsCreateOrConnectWithoutRoleInput: ["where", "create"],
  RolePermissionsCreateManyRoleInputEnvelope: ["data"],
  UserUpsertWithWhereUniqueWithoutRoleInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutRoleInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutRoleInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "email", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth", "roleId"],
  RolePermissionsUpsertWithWhereUniqueWithoutRoleInput: ["where", "update", "create"],
  RolePermissionsUpdateWithWhereUniqueWithoutRoleInput: ["where", "data"],
  RolePermissionsUpdateManyWithWhereWithoutRoleInput: ["where", "data"],
  RolePermissionsScalarWhereInput: ["AND", "OR", "NOT", "id", "roleId", "permissionId"],
  RolePermissionsCreateWithoutPermissionInput: ["Role"],
  RolePermissionsCreateOrConnectWithoutPermissionInput: ["where", "create"],
  RolePermissionsCreateManyPermissionInputEnvelope: ["data"],
  RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput: ["where", "update", "create"],
  RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput: ["where", "data"],
  RolePermissionsUpdateManyWithWhereWithoutPermissionInput: ["where", "data"],
  RoleCreateWithoutRolePermissionsInput: ["name", "User"],
  RoleCreateOrConnectWithoutRolePermissionsInput: ["where", "create"],
  PermissionCreateWithoutRolePermissionsInput: ["name"],
  PermissionCreateOrConnectWithoutRolePermissionsInput: ["where", "create"],
  RoleUpsertWithoutRolePermissionsInput: ["update", "create", "where"],
  RoleUpdateToOneWithWhereWithoutRolePermissionsInput: ["where", "data"],
  RoleUpdateWithoutRolePermissionsInput: ["name", "User"],
  PermissionUpsertWithoutRolePermissionsInput: ["update", "create", "where"],
  PermissionUpdateToOneWithWhereWithoutRolePermissionsInput: ["where", "data"],
  PermissionUpdateWithoutRolePermissionsInput: ["name"],
  UserCreateManyRoleInput: ["id", "email", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth"],
  RolePermissionsCreateManyRoleInput: ["id", "permissionId"],
  UserUpdateWithoutRoleInput: ["email", "username", "password", "firstName", "lastName", "lastLogin", "isSuperuser", "isStaff", "isActive", "dateJoined", "dateOfBirth"],
  RolePermissionsUpdateWithoutRoleInput: ["Permission"],
  RolePermissionsCreateManyPermissionInput: ["id", "roleId"],
  RolePermissionsUpdateWithoutPermissionInput: ["Role"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}


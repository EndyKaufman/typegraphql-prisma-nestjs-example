# typegraphql-prisma-nestjs-example

Example use NestJS + Prisma2 + Typegraphql

## Install

```bash
git clone https://github.com/EndyKaufman/typegraphql-prisma-nestjs-example.git
cd typegraphql-prisma-nestjs-example
npm ci
```

## Run

```bash
npm run start:watch
```

## Open browser

http://localhost:3000/graphql - graphql gui

https://endykaufman-typegraphql-prisma-nestjs-example.glitch.me/graphql - online graphql gui

https://github.com/EndyKaufman/typegraphql-prisma-nestjs-example/tree/master/src/dal - generated files for this example application

## Example of queries

### Mutation by Prisma2 + TypeGraphQL generator = Generated Crud

Query

```graphql
mutation {
    createOneUser(data: { username: "user", email: "user@user.com", password: "secret" }) {
        email
        username
        password
    }
}
```

Result

```js
{
  "data": {
    "createUser": {
      "email": "user@user.com",
      "username": "user",
      "password": "secret"
    }
  }
}
```

### Query by Prisma2 + TypeGraphQL generator = Generated Crud

Query

```graphql
query {
    users {
        id
        email
        password
    }
}
```

Result

```js
{
  "data": {
    "users": [
      {
        "id": 1,
        "email": "user@user.com",
        "password": "secret"
      }
    ]
  }
}
```

### Custom query by NestJS + TypeGraph

Query

```graphql
query {
    recipes(skip: 0) {
        title
        ingredients
    }
}
```

Result

```js
{
  "data": {
    "recipes": [
      {
        "title": "Recipe 1",
        "ingredients": [
          "apple",
          "orange"
        ]
      }
    ]
  }
}
```

### Mutation by Prisma2 + TypeGraphQL generator + use data from headers in data for insert to prisma = Generated Crud

Rule:

```ts
setTransformArgsIntoPrismaArgs((info: GraphQLResolveInfo, args: any, ctx: any) => {
    if (info.fieldName === UserCrudResolver.prototype.createOneUser.name && ctx.req.headers.email) {
        (args as CreateOneUserArgs).data.email = ctx.req.headers.email;
    }
    return args;
});
```

Query

```graphql
mutation {
    createOneUser(data: { username: "user", email: "user@user.com", password: "secret" }) {
        email
        username
        password
    }
}
```

Http headers:

```js
{"email":"newnew"}
```

Result

```js
{
  "data": {
    "createUser": {
      "email": "newnew",
      "username": "user",
      "password": "secret"
    }
  }
}
```

## Links

https://github.com/nestjs/nest/tree/master/sample/23-type-graphql

https://github.com/prisma/prisma2/blob/master/docs/getting-started/quickstart-existing-project.md

https://github.com/MichalLytek/typegraphql-prisma

https://github.com/MichalLytek/type-graphql

https://github.com/EndyKaufman/typegraphql-prisma-nestjs

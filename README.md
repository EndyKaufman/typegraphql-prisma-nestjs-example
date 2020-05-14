# typegraphql-prisma-nestjs-example

Example use NestJS + Prisma2 + Typegraphql

## Install

```bash
git clone https://github.com/EndyKaufman/typegraphql-prisma-nestjs-example.git
cd typegraphql-prisma-nestjs
npm i
```

## Run

```bash
npm run start:watch
```

## Open browser

http://localhost:3000/graphql - graphql gui

https://endykaufman-typegraphql-prisma-nestjs-example.glitch.me/graphql - online graphql gui

## Example of queries

### Mutation by Prisma2 + TypeGraphQL generator = Generated Crud

Query

```graphql
mutation {
  createUser(
    data: { username: "user", email: "user@user.com", password: "secret" }
  ) {
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
  recipes(skip:0) {
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

## Links

https://github.com/nestjs/nest/tree/master/sample/23-type-graphql

https://github.com/prisma/prisma2/blob/master/docs/getting-started/quickstart-existing-project.md

https://github.com/MichalLytek/type-graphql

https://github.com/EndyKaufman/typegraphql-prisma-nestjs

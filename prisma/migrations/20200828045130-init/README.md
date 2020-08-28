# Migration `20200828045130-init`

This migration has been generated at 8/28/2020, 8:51:30 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "auth_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "username" TEXT,
    "password" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "last_login" DATETIME NOT NULL,
    "is_superuser" BOOLEAN NOT NULL DEFAULT false,
    "is_staff" BOOLEAN NOT NULL DEFAULT false,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "date_joined" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_of_birth" DATETIME
)

CREATE UNIQUE INDEX "auth_users.email_unique" ON "auth_users"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200828045130-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,32 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+generator typegraphql {
+  provider = "typegraphql-prisma-nestjs"
+  output   = "../src/dal"
+}
+
+model User {
+  id          Int       @default(autoincrement()) @id
+  email       String    @unique
+  username    String?
+  password    String
+  firstName   String?   @map("first_name")
+  lastName    String?   @map("last_name")
+  lastLogin   DateTime  @updatedAt @map("last_login")
+  isSuperuser Boolean   @default(false) @map("is_superuser")
+  isStaff     Boolean   @default(false) @map("is_staff")
+  isActive    Boolean   @default(false) @map("is_active")
+  dateJoined  DateTime  @default(now()) @map("date_joined")
+  dateOfBirth DateTime? @map("date_of_birth")
+  @@map("auth_users")
+}
```



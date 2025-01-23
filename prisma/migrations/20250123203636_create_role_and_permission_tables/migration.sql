/*
  Warnings:

  - Added the required column `roleId` to the `auth_users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "auth_roles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "auth_permissions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "auth_role_permissions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "roleId" INTEGER NOT NULL,
    "permissionId" INTEGER NOT NULL,
    CONSTRAINT "auth_role_permissions_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "auth_roles" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "auth_role_permissions_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "auth_permissions" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_auth_users" (
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
    "date_of_birth" DATETIME,
    "roleId" INTEGER NOT NULL,
    CONSTRAINT "auth_users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "auth_roles" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);
INSERT INTO "new_auth_users" ("date_joined", "date_of_birth", "email", "first_name", "id", "is_active", "is_staff", "is_superuser", "last_login", "last_name", "password", "username") SELECT "date_joined", "date_of_birth", "email", "first_name", "id", "is_active", "is_staff", "is_superuser", "last_login", "last_name", "password", "username" FROM "auth_users";
DROP TABLE "auth_users";
ALTER TABLE "new_auth_users" RENAME TO "auth_users";
CREATE UNIQUE INDEX "auth_users_email_key" ON "auth_users"("email");
CREATE INDEX "idx_auth_users__role_id" ON "auth_users"("roleId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "auth_roles_name_key" ON "auth_roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "auth_permissions_name_key" ON "auth_permissions"("name");

-- CreateIndex
CREATE INDEX "idx_auth_role_permissions__role_id" ON "auth_role_permissions"("roleId");

-- CreateIndex
CREATE INDEX "idx_auth_role_permissions__role_permission_id" ON "auth_role_permissions"("permissionId");

-- CreateIndex
CREATE UNIQUE INDEX "uq_auth_role_permissions" ON "auth_role_permissions"("roleId", "permissionId");

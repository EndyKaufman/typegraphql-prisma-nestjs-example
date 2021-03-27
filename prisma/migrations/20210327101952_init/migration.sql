-- CreateTable
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
);

-- CreateIndex
CREATE UNIQUE INDEX "auth_users.email_unique" ON "auth_users"("email");

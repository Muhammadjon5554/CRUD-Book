-- CreateTable
CREATE TABLE "Books" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "pages" INTEGER NOT NULL,
    "is_sold" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);

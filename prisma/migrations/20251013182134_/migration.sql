/*
  Warnings:

  - Made the column `productId` on table `Size` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "IngredientType" AS ENUM ('tomatoes', 'olive', 'vegetables');

-- DropForeignKey
ALTER TABLE "public"."Size" DROP CONSTRAINT "Size_productId_fkey";

-- AlterTable
ALTER TABLE "Size" ALTER COLUMN "productId" SET NOT NULL;

-- CreateTable
CREATE TABLE "Exra" (
    "id" TEXT NOT NULL,
    "name" "IngredientType" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Exra_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Size" ADD CONSTRAINT "Size_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exra" ADD CONSTRAINT "Exra_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

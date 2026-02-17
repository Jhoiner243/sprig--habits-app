/*
  Warnings:

  - The primary key for the `habit_completions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `habits` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `completed` on the `habits` table. All the data in the column will be lost.
  - Added the required column `userId` to the `habits` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EnergyLevel" AS ENUM ('SEED', 'SPROUT', 'FOREST');

-- CreateEnum
CREATE TYPE "Frequency" AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY', 'CUSTOM');

-- CreateEnum
CREATE TYPE "MilestoneType" AS ENUM ('TIME_DURATION');

-- DropForeignKey
ALTER TABLE "habit_completions" DROP CONSTRAINT "habit_completions_habitId_fkey";

-- AlterTable
ALTER TABLE "habit_completions" DROP CONSTRAINT "habit_completions_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "habitId" SET DATA TYPE TEXT,
ADD CONSTRAINT "habit_completions_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "habit_completions_id_seq";

-- AlterTable
ALTER TABLE "habits" DROP CONSTRAINT "habits_pkey",
DROP COLUMN "completed",
ADD COLUMN     "forestDuration" INTEGER,
ADD COLUMN     "frequency" "Frequency" NOT NULL DEFAULT 'DAILY',
ADD COLUMN     "frequencyCustom" TEXT,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "scheduledDate" TIMESTAMP(3),
ADD COLUMN     "scheduledTime" TEXT,
ADD COLUMN     "seedDuration" INTEGER,
ADD COLUMN     "sproutDuration" INTEGER,
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "habits_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "habits_id_seq";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habit_logs" (
    "id" TEXT NOT NULL,
    "habitId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedLevel" "EnergyLevel" NOT NULL,
    "actualDuration" INTEGER,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "habit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "milestones" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "type" "MilestoneType" NOT NULL DEFAULT 'TIME_DURATION',
    "target" DOUBLE PRECISION NOT NULL,
    "current" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "unit" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "milestones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habit_milestones" (
    "id" TEXT NOT NULL,
    "habitId" TEXT NOT NULL,
    "milestoneId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "habit_milestones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reflections" (
    "id" TEXT NOT NULL,
    "habitId" TEXT NOT NULL,
    "habitLogId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "feeling" TEXT NOT NULL,
    "mood" INTEGER,
    "notes" TEXT,
    "aiResponse" TEXT,
    "suggestion" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reflections_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "habit_logs_habitId_idx" ON "habit_logs"("habitId");

-- CreateIndex
CREATE INDEX "habit_logs_userId_idx" ON "habit_logs"("userId");

-- CreateIndex
CREATE INDEX "habit_logs_completedAt_idx" ON "habit_logs"("completedAt");

-- CreateIndex
CREATE INDEX "habit_logs_habitId_userId_completedAt_idx" ON "habit_logs"("habitId", "userId", "completedAt");

-- CreateIndex
CREATE INDEX "habit_milestones_habitId_idx" ON "habit_milestones"("habitId");

-- CreateIndex
CREATE INDEX "habit_milestones_milestoneId_idx" ON "habit_milestones"("milestoneId");

-- CreateIndex
CREATE UNIQUE INDEX "habit_milestones_habitId_milestoneId_key" ON "habit_milestones"("habitId", "milestoneId");

-- CreateIndex
CREATE UNIQUE INDEX "reflections_habitLogId_key" ON "reflections"("habitLogId");

-- CreateIndex
CREATE INDEX "reflections_userId_idx" ON "reflections"("userId");

-- CreateIndex
CREATE INDEX "reflections_habitLogId_idx" ON "reflections"("habitLogId");

-- CreateIndex
CREATE INDEX "habits_userId_idx" ON "habits"("userId");

-- CreateIndex
CREATE INDEX "habits_isActive_idx" ON "habits"("isActive");

-- AddForeignKey
ALTER TABLE "habits" ADD CONSTRAINT "habits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habit_logs" ADD CONSTRAINT "habit_logs_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habits"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habit_logs" ADD CONSTRAINT "habit_logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habit_milestones" ADD CONSTRAINT "habit_milestones_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habits"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habit_milestones" ADD CONSTRAINT "habit_milestones_milestoneId_fkey" FOREIGN KEY ("milestoneId") REFERENCES "milestones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reflections" ADD CONSTRAINT "reflections_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habits"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reflections" ADD CONSTRAINT "reflections_habitLogId_fkey" FOREIGN KEY ("habitLogId") REFERENCES "habit_logs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reflections" ADD CONSTRAINT "reflections_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habit_completions" ADD CONSTRAINT "habit_completions_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habits"("id") ON DELETE CASCADE ON UPDATE CASCADE;

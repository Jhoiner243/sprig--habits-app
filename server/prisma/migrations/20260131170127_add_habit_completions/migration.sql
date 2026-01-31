-- CreateTable
CREATE TABLE "habit_completions" (
    "id" SERIAL NOT NULL,
    "habitId" INTEGER NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "habit_completions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "habit_completions_habitId_idx" ON "habit_completions"("habitId");

-- CreateIndex
CREATE INDEX "habit_completions_completedAt_idx" ON "habit_completions"("completedAt");

-- CreateIndex
CREATE INDEX "habit_completions_habitId_completedAt_idx" ON "habit_completions"("habitId", "completedAt");

-- AddForeignKey
ALTER TABLE "habit_completions" ADD CONSTRAINT "habit_completions_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habits"("id") ON DELETE CASCADE ON UPDATE CASCADE;

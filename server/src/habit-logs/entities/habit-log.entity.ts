export class HabitLog {
  id: string;
  habitId: string;
  userId: string;
  completedAt: Date;
  completedLevel: 'SEED' | 'SPROUT' | 'FOREST';
  actualDuration?: number | null;
  notes?: string | null;
  createdAt: Date;
}

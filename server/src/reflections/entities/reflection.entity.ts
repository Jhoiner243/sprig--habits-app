export class Reflection {
  id: string;
  habitId: string;
  habitLogId: string;
  userId: string;
  feeling: string;
  mood?: number | null;
  notes?: string | null;
  aiResponse?: string | null;
  suggestion?: string | null;
  createdAt: Date;
}

export class Milestone {
  id: string;
  title: string;
  description?: string | null;
  type: 'TIME_DURATION';
  target: number;
  current: number;
  unit?: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

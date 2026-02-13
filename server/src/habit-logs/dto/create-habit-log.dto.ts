import { IsString, IsEnum, IsOptional, IsNumber } from 'class-validator';

enum EnergyLevel {
  SEED = 'SEED',
  SPROUT = 'SPROUT',
  FOREST = 'FOREST',
}

export class CreateHabitLogDto {
  @IsString()
  habitId: string;

  @IsString()
  userId: string;

  @IsEnum(EnergyLevel)
  completedLevel: EnergyLevel;

  @IsNumber()
  @IsOptional()
  actualDuration?: number;

  @IsString()
  @IsOptional()
  notes?: string;
}

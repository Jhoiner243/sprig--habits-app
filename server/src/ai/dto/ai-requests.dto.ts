import { IsString, IsOptional } from 'class-validator';

export class GenerateMotivationDto {
  @IsString()
  userId: string;

  @IsString()
  @IsOptional()
  habitId?: string;

  @IsString()
  @IsOptional()
  feeling?: string;

  @IsString()
  @IsOptional()
  context?: string;
}

export class SuggestScheduleDto {
  @IsString()
  userId: string;

  @IsString()
  habitId: string;

  @IsString()
  @IsOptional()
  currentSchedule?: string;

  @IsString()
  @IsOptional()
  constraints?: string;
}

export class SuggestLevelDto {
  @IsString()
  userId: string;

  @IsString()
  habitId: string;

  @IsString()
  @IsOptional()
  dayContext?: string;

  @IsString()
  @IsOptional()
  energyLevel?: string;

  @IsString()
  @IsOptional()
  timeAvailable?: string;
}

import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateReflectionDto {
  @IsString()
  habitId: string;

  @IsString()
  habitLogId: string;

  @IsString()
  userId: string;

  @IsString()
  feeling: string;

  @IsNumber()
  @IsOptional()
  mood?: number;

  @IsString()
  @IsOptional()
  notes?: string;

  @IsString()
  @IsOptional()
  aiResponse?: string;

  @IsString()
  @IsOptional()
  suggestion?: string;
}

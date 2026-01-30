import { IsString, IsOptional } from 'class-validator';

export class CreateHabitDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;
}

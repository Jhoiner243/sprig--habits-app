import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsEnum,
} from 'class-validator';

enum MilestoneType {
  TIME_DURATION = 'TIME_DURATION',
}

export class CreateMilestoneDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(MilestoneType)
  type: MilestoneType = MilestoneType.TIME_DURATION;

  @IsNumber()
  target: number;

  @IsString()
  @IsOptional()
  unit?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean = true;
}

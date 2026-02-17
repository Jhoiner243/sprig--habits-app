import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { VersionConstant } from '../common/version-constant';
import { AiService } from './ai.service';
import {
  GenerateMotivationDto,
  SuggestScheduleDto,
  SuggestLevelDto,
} from './dto/ai-requests.dto';

@Controller(`${VersionConstant.API_VERSION}/ai`)
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('motivation')
  generateMotivation(@Body() dto: GenerateMotivationDto) {
    return this.aiService.generateMotivation(dto);
  }

  @Post('schedule/suggest')
  suggestSchedule(@Body() dto: SuggestScheduleDto) {
    return this.aiService.suggestSchedule(dto);
  }

  @Post('level/suggest')
  suggestLevel(@Body() dto: SuggestLevelDto) {
    return this.aiService.suggestLevel(dto);
  }

  @Get('progress/analyze')
  analyzeProgress(
    @Query('userId') userId: string,
    @Query('habitId') habitId?: string,
  ) {
    return this.aiService.analyzeProgress(userId, habitId);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { VersionConstant } from '../common/version-constant';
import { CreateHabitLogDto } from './dto/create-habit-log.dto';
import { UpdateHabitLogDto } from './dto/update-habit-log.dto';
import { HabitLogsService } from './habit-logs.service';

@Controller(`${VersionConstant.API_VERSION}/habit-logs`)
export class HabitLogsController {
  constructor(private readonly habitLogsService: HabitLogsService) {}

  @Post()
  create(@Body() createHabitLogDto: CreateHabitLogDto) {
    return this.habitLogsService.create(createHabitLogDto);
  }

  @Get()
  findAll() {
    return this.habitLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habitLogsService.findOne(id);
  }

  @Get('habit/:habitId')
  findByHabit(@Param('habitId') habitId: string) {
    return this.habitLogsService.findByHabit(habitId);
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.habitLogsService.findByUser(userId);
  }

  @Get('user/:userId/date/:date')
  findByUserAndDate(
    @Param('userId') userId: string,
    @Param('date') date: string,
  ) {
    const dateObj = new Date(date);
    return this.habitLogsService.findByUserAndDate(userId, dateObj);
  }

  @Get('user/:userId/calendar')
  getCalendarView(
    @Param('userId') userId: string,
    @Query('year') year: number,
    @Query('month') month: number,
  ) {
    return this.habitLogsService.getCalendarView(userId, year, month);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHabitLogDto: UpdateHabitLogDto,
  ) {
    return this.habitLogsService.update(id, updateHabitLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habitLogsService.remove(id);
  }
}

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
import { CreateReflectionDto } from './dto/create-reflection.dto';
import { UpdateReflectionDto } from './dto/update-reflection.dto';
import { ReflectionsService } from './reflections.service';

@Controller(`${VersionConstant.API_VERSION}/reflections`)
export class ReflectionsController {
  constructor(private readonly reflectionsService: ReflectionsService) {}

  @Post()
  create(@Body() createReflectionDto: CreateReflectionDto) {
    return this.reflectionsService.create(createReflectionDto);
  }

  @Get()
  findAll() {
    return this.reflectionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reflectionsService.findOne(id);
  }

  @Get('habit/:habitId')
  findByHabit(@Param('habitId') habitId: string) {
    return this.reflectionsService.findByHabit(habitId);
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.reflectionsService.findByUser(userId);
  }

  @Get('habit-log/:habitLogId')
  findByHabitLog(@Param('habitLogId') habitLogId: string) {
    return this.reflectionsService.findByHabitLog(habitLogId);
  }

  @Get('user/:userId/patterns')
  getUserReflectionPatterns(
    @Param('userId') userId: string,
    @Query('limit') limit?: number,
  ) {
    return this.reflectionsService.getUserReflectionPatterns(userId, limit);
  }

  @Get('user/:userId/feeling/:feelingKeyword')
  findByFeeling(
    @Param('userId') userId: string,
    @Param('feelingKeyword') feelingKeyword: string,
  ) {
    return this.reflectionsService.findByFeeling(userId, feelingKeyword);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReflectionDto: UpdateReflectionDto,
  ) {
    return this.reflectionsService.update(id, updateReflectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reflectionsService.remove(id);
  }
}

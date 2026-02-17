import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { VersionConstant } from '../common/version-constant';
import { CreateMilestoneDto } from './dto/create-milestone.dto';
import { UpdateMilestoneDto } from './dto/update-milestone.dto';
import { MilestonesService } from './milestones.service';

@Controller(`${VersionConstant.API_VERSION}/milestones`)
export class MilestonesController {
  constructor(private readonly milestonesService: MilestonesService) {}

  @Post()
  create(@Body() createMilestoneDto: CreateMilestoneDto) {
    return this.milestonesService.create(createMilestoneDto);
  }

  @Get()
  findAll() {
    return this.milestonesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.milestonesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMilestoneDto: UpdateMilestoneDto,
  ) {
    return this.milestonesService.update(id, updateMilestoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.milestonesService.remove(id);
  }

  @Post(':milestoneId/associate/:habitId')
  associateWithHabit(
    @Param('milestoneId') milestoneId: string,
    @Param('habitId') habitId: string,
  ) {
    return this.milestonesService.associateWithHabit(habitId, milestoneId);
  }

  @Delete(':milestoneId/associate/:habitId')
  removeAssociation(
    @Param('milestoneId') milestoneId: string,
    @Param('habitId') habitId: string,
  ) {
    return this.milestonesService.removeAssociation(habitId, milestoneId);
  }

  @Get('habit/:habitId')
  getMilestonesForHabit(@Param('habitId') habitId: string) {
    return this.milestonesService.getMilestonesForHabit(habitId);
  }

  @Put(':id/progress/:progress')
  updateProgress(@Param('id') id: string, @Param('progress') progress: number) {
    return this.milestonesService.updateProgress(id, progress);
  }
}

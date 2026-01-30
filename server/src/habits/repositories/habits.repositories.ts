import { InjectsDecorators } from "../../decorators/injects.decorator";
import { PrismaService } from "../../prisma/prisma.service";

@InjectsDecorators.InjectCustom()
export class HabitsRepositories {
  constructor(
    @InjectsDecorators.InjectCustomRepository(PrismaService)
    private prisma: PrismaService
  ){
    
  }
    createHabit(){

    }
}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import {Project, Role, Trade, User, ProjectTradeRef} from "../../entities";

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role, Project, Trade, ProjectTradeRef], 'cw_lcap')
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule {}

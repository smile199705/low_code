import { Module } from '@nestjs/common';
import { ComponentGroupController } from './component-group.controller';
import { ComponentGroupService } from './component-group.service';

@Module({
  controllers: [ComponentGroupController],
  providers: [ComponentGroupService]
})
export class ComponentGroupModule {}

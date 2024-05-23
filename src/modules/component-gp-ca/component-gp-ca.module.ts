import { Module } from '@nestjs/common';
import { ComponentGpCaController } from './component-gp-ca.controller';
import { ComponentGpCaService } from './component-gp-ca.service';

@Module({
  controllers: [ComponentGpCaController],
  providers: [ComponentGpCaService]
})
export class ComponentGpCaModule {}

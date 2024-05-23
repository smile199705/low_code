import { Module } from '@nestjs/common';
import { DatasourceController } from './datasource.controller';
import { DatasourceService } from './datasource.service';

@Module({
  controllers: [DatasourceController],
  providers: [DatasourceService]
})
export class DatasourceModule {}

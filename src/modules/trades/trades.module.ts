import { Module } from '@nestjs/common';
import { TradesController } from './trades.controller';
import { TradesService } from './trades.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Project, Trade} from "../../entities";

@Module({
  imports:[
      TypeOrmModule.forFeature([Trade, Project], 'cw_lcap')
  ],
  controllers: [TradesController],
  providers: [TradesService]
})
export class TradesModule {}

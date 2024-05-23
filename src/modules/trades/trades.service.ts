import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Project, Trade} from "../../entities";

@Injectable()
export class TradesService {

    @InjectRepository(Trade, 'cw_lcap')
    private readonly tradeRep: Repository<Trade>

    @InjectRepository(Project, 'cw_lcap')
    private readonly projectRep: Repository<Project>

    async list() {
        return await this.tradeRep.find({
            select: ["id", "name"]
        })
    }
}

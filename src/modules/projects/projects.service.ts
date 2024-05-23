import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Project, ProjectTradeRef, Trade, User} from "../../entities";
import {Like, Repository, In, getConnection, getManager} from "typeorm";
import {Id} from "../../utils/util";

@Injectable()
export class ProjectsService {

    @InjectRepository(Project, 'cw_lcap')
    private readonly projectRep: Repository<Project>

    @InjectRepository(Trade, 'cw_lcap')
    private readonly tradeRep!: Repository<Trade>

    @InjectRepository(ProjectTradeRef, 'cw_lcap')
    private readonly projectTradeRefRep!: Repository<ProjectTradeRef>

    async list(curPage = 1, pageSize = 10, key = '') {
        // 项目表，所属行业，关系表
        let queryBuilder = this.projectRep.createQueryBuilder('project')
        const res = await queryBuilder
            .leftJoin(ProjectTradeRef, 'proRef', 'project.id = proRef.projectId')
            .innerJoinAndMapMany('project.trades', Trade, 'trade', 'trade.id = proRef.tradeId')
            .where('project.deleted = :deleted', { deleted: 0 })
            .andWhere('project.name like :name', { name: "%" + key + '%'})
            .skip((curPage - 1) * pageSize)
            .take(pageSize)
            .orderBy('project.createTime', 'DESC')
            .getManyAndCount()
        return {
            list: res[0],
            total: res[1]
        }
    }

    async create(body: any) {
        // let id = await Id()
        try {
            const tr = await this.projectRep.manager.transaction(async manager => {
                const res = await this.projectRep.save({
                    id: await Id(),
                    name: body?.name,
                    desc: body?.desc
                })
                console.log(res, '@@@@@@@@2')
                let nameArr = []
                body?.trades.forEach(item => {
                    nameArr.push(item?.name)
                })
                const re = await this.getByName(nameArr)
                for (const tradeId of re) {
                    let obj = {
                        id: await Id(),
                        projectId: res?.id,
                        tradeId: tradeId?.id
                    }
                    await this.projectTradeRefRep.save(obj)
                }
                return {
                    id: res?.id ?? ''
                }
            })
            console.log(tr, 'tr=========')
            return tr
        } catch (e) {
            throw new Error('创建项目失败' + e)
        }
    }

    async getByName(trades: Array<string>) {
        const res = await this.tradeRep.find({
            select: ['id'],
            where: {
                name: In(trades)
            }
        })
        return res
    }

    async update(body: any, id: any) {
        try {
            const {name, desc, trades} = body
            return await this.projectRep.manager.transaction(async manage => {
                const [, refRes] = await Promise.all([
                    this.projectRep.update({id}, {name, desc}),
                    this.projectTradeRefRep.find({
                        select: ['tradeId'],
                        where: {
                            projectId: id,
                            deleted: 0
                        }
                    })
                ])
                let nameArr = []
                trades.forEach(item => {
                    nameArr.push(item?.name)
                })
                // 获取当前选定的行业数组
                const [queryTrade,] = await Promise.all([
                    this.tradeRep.find({
                        select: ['id'],
                        where: {
                            name: In(nameArr)
                        }
                    }),
                    this.projectTradeRefRep.update({projectId: id}, {deleted: 1})
                ])
                // 更新项目关联表中所有的行业关系
                let queryTr = 0
                for (const traId of queryTrade) {
                    queryTr = await this.projectTradeRefRep.count({
                        where: {
                            projectId: id,
                            tradeId: traId?.id
                        }
                    })
                    if (queryTr > 0) {
                        await this.projectTradeRefRep.update({projectId: id, tradeId: traId?.id}, {deleted: 0})
                    } else {
                        await this.projectTradeRefRep.save({
                            id: await Id(),
                            projectId: id,
                            tradeId: traId?.id
                        })
                    }
                }

                return 'SUCCESS'
            })
        } catch (e) {
            throw new Error('编辑项目保存失败' + e)
        }
    }

    async delete(id: any) {
        try {
            await this.projectRep.manager.transaction(async manage => {
                await Promise.all([
                    this.projectRep.update({id}, {deleted: 1}),
                    this.projectTradeRefRep.delete({projectId: id})
                ])
            })
            return '删除项目成功'
        } catch (e) {
            throw new Error('删除项目失败' + e)
        }
    }
}

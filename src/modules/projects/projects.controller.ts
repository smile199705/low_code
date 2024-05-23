import {Body, Controller, Delete, Get, Inject, Param, Post, Put, Query} from '@nestjs/common';
import {ProjectsService} from "./projects.service";

@Controller('projects')
export class ProjectsController {

    @Inject()
    private readonly projectsService: ProjectsService

    @Post('')
    async create(@Body() body: any) {
        // 1、插入项目表
        const res = await this.projectsService.create(body)
        return res
    }

    @Get('list')
    async list(@Query() { curPage, pageSize, key }) {
        const res = await this.projectsService.list(curPage, pageSize, key)
        return Object.assign(res, { curPage: +curPage, pageSize: +pageSize })
        // return {
        //     "code": 1,
        //     "msg": "SUCCESS",
        //     "data": {
        //         "curPage": 1,
        //         "pageSize": 10,
        //         "total": 396,
        //         "list": [
        //             {
        //                 "id": "1792801136231661570",
        //                 "name": "ta大屏",
        //                 "desc": null,
        //                 "creator": 1768540861869670400,
        //                 "updater": 1768540861869670400,
        //                 "creatorName": "杨新",
        //                 "accountId": 110,
        //                 "createTime": 1716272074000,
        //                 "updateTime": 1716272074000,
        //                 "trades": [
        //                     {
        //                         "id": "1781279276163743746",
        //                         "name": "大数据分析",
        //                         "projectId": "1792801136231661570"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "id": "1792479969209827329",
        //                 "name": "人口",
        //                 "desc": null,
        //                 "creator": 1792477643925438500,
        //                 "updater": 1792477643925438500,
        //                 "creatorName": "有机甜",
        //                 "accountId": 110,
        //                 "createTime": 1716195502000,
        //                 "updateTime": 1716195502000,
        //                 "trades": [
        //                     {
        //                         "id": "1792426816334544897",
        //                         "name": "demo-my",
        //                         "projectId": "1792479969209827329"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "id": "1792426816347127809",
        //                 "name": "demo-my",
        //                 "desc": "demo",
        //                 "creator": 1792426405548605400,
        //                 "updater": 1792426405548605400,
        //                 "creatorName": "lxy12124",
        //                 "accountId": 110,
        //                 "createTime": 1716182829000,
        //                 "updateTime": 1716182829000,
        //                 "trades": [
        //                     {
        //                         "id": "1792426816334544897",
        //                         "name": "demo-my",
        //                         "projectId": "1792426816347127809"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "id": "1792422444309495809",
        //                 "name": "DP001",
        //                 "desc": null,
        //                 "creator": 1792422357277687800,
        //                 "updater": 1792422357277687800,
        //                 "creatorName": "shenxiaowei",
        //                 "accountId": 110,
        //                 "createTime": 1716181787000,
        //                 "updateTime": 1716181787000,
        //                 "trades": [
        //                     {
        //                         "id": "1790639676395175937",
        //                         "name": "人力资源",
        //                         "projectId": "1792422444309495809"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "id": "1792382696425603073",
        //                 "name": "可视化",
        //                 "desc": null,
        //                 "creator": 1792382462869979100,
        //                 "updater": 1792382462869979100,
        //                 "creatorName": "byf",
        //                 "accountId": 110,
        //                 "createTime": 1716172310000,
        //                 "updateTime": 1716172310000,
        //                 "trades": [
        //                     {
        //                         "id": "1678309122652545026",
        //                         "name": "数据",
        //                         "projectId": "1792382696425603073"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "id": "1791866292622409730",
        //                 "name": "test-001",
        //                 "desc": null,
        //                 "creator": 6410,
        //                 "updater": 6410,
        //                 "creatorName": "ADMIN",
        //                 "accountId": 110,
        //                 "createTime": 1716049190000,
        //                 "updateTime": 1716049190000,
        //                 "trades": [
        //                     {
        //                         "id": "1790639676395175937",
        //                         "name": "人力资源",
        //                         "projectId": "1791866292622409730"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "id": "1791813194377936898",
        //                 "name": "测试zrm",
        //                 "desc": null,
        //                 "creator": 1791813028203806700,
        //                 "updater": 1791813028203806700,
        //                 "creatorName": "zrmsky",
        //                 "accountId": 110,
        //                 "createTime": 1716036530000,
        //                 "updateTime": 1716036530000,
        //                 "trades": [
        //                     {
        //                         "id": "1772648056706121730",
        //                         "name": "点",
        //                         "projectId": "1791813194377936898"
        //                     },
        //                     {
        //                         "id": "1772906924975669250",
        //                         "name": "thewalk",
        //                         "projectId": "1791813194377936898"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "id": "1791151842877587457",
        //                 "name": "用户行为分析可视化",
        //                 "desc": "用户行为分析可视化",
        //                 "creator": 1791150566395691000,
        //                 "updater": 1791434840558616600,
        //                 "creatorName": "a18726071661",
        //                 "accountId": 110,
        //                 "createTime": 1715878852000,
        //                 "updateTime": 1715946414000,
        //                 "trades": [
        //                     {
        //                         "id": "1781279276163743746",
        //                         "name": "大数据分析",
        //                         "projectId": "1791151842877587457"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "id": "1791353247026462721",
        //                 "name": "2323",
        //                 "desc": null,
        //                 "creator": 1791353010631295000,
        //                 "updater": 1791353010631295000,
        //                 "creatorName": "wfsf",
        //                 "accountId": 110,
        //                 "createTime": 1715926870000,
        //                 "updateTime": 1715926870000,
        //                 "trades": [
        //                     {
        //                         "id": "1672884101046116353",
        //                         "name": "12q22",
        //                         "projectId": "1791353247026462721"
        //                     },
        //                     {
        //                         "id": "1790276553444245506",
        //                         "name": "aq",
        //                         "projectId": "1791353247026462721"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "id": "1791125373572956162",
        //                 "name": "aaas",
        //                 "desc": null,
        //                 "creator": 1613128193869365200,
        //                 "updater": 1613128193869365200,
        //                 "creatorName": "admin",
        //                 "accountId": 110,
        //                 "createTime": 1715872541000,
        //                 "updateTime": 1715872541000,
        //                 "trades": [
        //                     {
        //                         "id": "1784486531457695745",
        //                         "name": "供销社",
        //                         "projectId": "1791125373572956162"
        //                     }
        //                 ]
        //             }
        //         ]
        //     }
        // }
    }

    @Put(':id')
    async update(@Body() body: any, @Param() { id }: any) {
        return await this.projectsService.update(body, id)

    }

    @Delete(':id')
    async delete(@Param() { id }: any) {
        return await this.projectsService.delete(id)
    }
}

import { Controller, Get, Post } from '@nestjs/common';
import {ApiRequest} from "../../utils/axios_http";

@Controller('ausers')
export class PagesController {

    @Get('info')
    async list() {
        return {
            "code": 200,
            "msg": "SUCCESS",
            "data": {
                "id": "1792367751000571905",
                "username": "weiyang",
                "email": "18391952502@163.com",
                "phone": "18391952502",
                "roleId": "2",
                "status": "valid",
                "isDouc": false,
                "isAdmin": false,
                "menus": [
                    {
                        "name": "应用创建",
                        "index": 1,
                        "url": "/app"
                    },
                    {
                        "name": "项目管理",
                        "index": 2,
                        "url": "/app/project-manage",
                        "children": []
                    },
                    {
                        "name": "应用开发",
                        "index": 3,
                        "url": "/app/apply-develop",
                        "children": []
                    },
                    {
                        "name": "组件列表",
                        "index": 4,
                        "url": "/app/component-develop",
                        "children": []
                    },
                    {
                        "name": "数据源管理",
                        "index": 8,
                        "url": "/data"
                    },
                    {
                        "name": "数据查询",
                        "index": 9,
                        "url": "/data-search"
                    }
                ],
                "updater": null,
                "creator": null,
                "createTime": "2024-05-20 09:32:27",
                "updateTime": "2024-05-20 09:32:27"
            }
        }
    }

    @Post('list')
    async getList() {
        return {
            "code": 200,
            "msg": "SUCCESS",
            "data": {
                "curPage": 1,
                "pageSize": 5,
                "total": 11176,
                "list": [
                    {
                        "id": "1792811232739278849",
                        "username": "kunhuang00",
                        "email": "kunhuang00@126.com",
                        "phone": "13770528006",
                        "roleId": "2",
                        "status": "valid",
                        "isDouc": false,
                        "isAdmin": null,
                        "menus": null,
                        "updater": null,
                        "creator": null,
                        "createTime": "2024-05-21 14:54:41",
                        "updateTime": "2024-05-21 14:54:41"
                    },
                    {
                        "id": "1792802811428290562",
                        "username": "dapingces",
                        "email": "155271292@qq.com",
                        "phone": "13888888888",
                        "roleId": "2",
                        "status": "valid",
                        "isDouc": false,
                        "isAdmin": null,
                        "menus": null,
                        "updater": null,
                        "creator": null,
                        "createTime": "2024-05-21 14:21:14",
                        "updateTime": "2024-05-21 14:21:14"
                    },
                    {
                        "id": "1792790120139669505",
                        "username": "lxy123123",
                        "email": "2231560549@qq.com",
                        "phone": "15545126807",
                        "roleId": "2",
                        "status": "valid",
                        "isDouc": false,
                        "isAdmin": null,
                        "menus": null,
                        "updater": null,
                        "creator": null,
                        "createTime": "2024-05-21 13:30:48",
                        "updateTime": "2024-05-21 13:30:48"
                    },
                    {
                        "id": "1792477643925438466",
                        "username": "有机甜",
                        "email": "1976560706@qq.com",
                        "phone": "18013089099",
                        "roleId": "2",
                        "status": "valid",
                        "isDouc": false,
                        "isAdmin": null,
                        "menus": null,
                        "updater": null,
                        "creator": null,
                        "createTime": "2024-05-20 16:49:08",
                        "updateTime": "2024-05-20 16:49:08"
                    },
                    {
                        "id": "1792464516458561537",
                        "username": "sxz147",
                        "email": "sxz147@163.com",
                        "phone": "18610037556",
                        "roleId": "2",
                        "status": "valid",
                        "isDouc": false,
                        "isAdmin": null,
                        "menus": null,
                        "updater": null,
                        "creator": null,
                        "createTime": "2024-05-20 15:56:58",
                        "updateTime": "2024-05-20 15:56:58"
                    }
                ]
            }
        }
    }


}

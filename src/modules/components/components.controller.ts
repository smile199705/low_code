import {Controller, Post} from '@nestjs/common';

@Controller('components')
export class ComponentsController {

    @Post('categories/list')
    async list() {
        return {
            "code": 200,
            "msg": "SUCCESS",
            "data": [
                {
                    "id": "1790285585429118978",
                    "name": "自用",
                    "icon": "icon-navigation",
                    "children": [
                        {
                            "id": "1790285846042198017",
                            "name": "000",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1790285846042198017",
                            "name": "000",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1788816425239003137",
                    "name": "11111",
                    "icon": "icon-map",
                    "children": [],
                    "subCategories": []
                },
                {
                    "id": "1777630828654837761",
                    "name": "aaaa",
                    "icon": "icon-navigation",
                    "children": [
                        {
                            "id": "1777630878856462338",
                            "name": "bbb",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1777630878856462338",
                            "name": "bbb",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1775357976928927746",
                    "name": "所有",
                    "icon": "icon-chart",
                    "children": [
                        {
                            "id": "1775358171062288386",
                            "name": "全部",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1775358171062288386",
                            "name": "全部",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1769983528151367681",
                    "name": "xxx",
                    "icon": "icon-chart",
                    "children": [],
                    "subCategories": []
                },
                {
                    "id": "1763021559456415745",
                    "name": "百货test",
                    "icon": "icon-map",
                    "children": [
                        {
                            "id": "1763021855842713602",
                            "name": "组件",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1763021855842713602",
                            "name": "组件",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1758344889965297666",
                    "name": "zikz",
                    "icon": "icon-chart",
                    "children": [
                        {
                            "id": "1758353587450232834",
                            "name": "好用",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1758347657337716738",
                            "name": "111",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1758353587450232834",
                            "name": "好用",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1758347657337716738",
                            "name": "111",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1751890782698160130",
                    "name": "员工",
                    "icon": "icon-media",
                    "children": [
                        {
                            "id": "1751890920648818689",
                            "name": "图表",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1751890920648818689",
                            "name": "图表",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1751474745443958785",
                    "name": "起步",
                    "icon": "icon-gauge-chart",
                    "children": [
                        {
                            "id": "1751499191542169601",
                            "name": "1",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1751499191542169601",
                            "name": "1",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1744898868526530561",
                    "name": "列表监控",
                    "icon": "icon-table",
                    "children": [
                        {
                            "id": "1750275201779712001",
                            "name": "11",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1744898938961477634",
                            "name": "CPU",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1750275201779712001",
                            "name": "11",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1744898938961477634",
                            "name": "CPU",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1744897882462437377",
                    "name": "水滴图",
                    "icon": "icon-media",
                    "children": [
                        {
                            "id": "1750275227562098690",
                            "name": "11",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1744897961218883586",
                            "name": "波浪图",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1750275227562098690",
                            "name": "11",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1744897961218883586",
                            "name": "波浪图",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1730099738130333697",
                    "name": "ixfcn",
                    "icon": "icon-bar-chart",
                    "children": [
                        {
                            "id": "1730100079739617282",
                            "name": "导入",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1730100079739617282",
                            "name": "导入",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1699259812124073986",
                    "name": "背景图",
                    "icon": "icon-table",
                    "children": [
                        {
                            "id": "1760212312939118594",
                            "name": "112",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1750275257052250113",
                            "name": "11",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1699778653249904641",
                            "name": "买买买",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1699259906596577281",
                            "name": "首页背景图 ",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1760212312939118594",
                            "name": "112",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1750275257052250113",
                            "name": "11",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1699778653249904641",
                            "name": "买买买",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1699259906596577281",
                            "name": "首页背景图 ",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1690266118284943361",
                    "name": "AA",
                    "icon": "icon-media",
                    "children": [
                        {
                            "id": "1690266144780361730",
                            "name": "AA",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1690266144780361730",
                            "name": "AA",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1688486628907065345",
                    "name": "1321",
                    "icon": "icon-chart",
                    "children": [],
                    "subCategories": []
                },
                {
                    "id": "1684504061216333825",
                    "name": "oo",
                    "icon": "icon-table",
                    "children": [],
                    "subCategories": []
                },
                {
                    "id": "1663366071236747265",
                    "name": "练习",
                    "icon": "icon-chart",
                    "children": [
                        {
                            "id": "1699330873477865473",
                            "name": "11",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1663800033557901314",
                            "name": "控件",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1663366773950439425",
                            "name": "柱形图",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1663366730652639234",
                            "name": "饼图",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1699330873477865473",
                            "name": "11",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1663800033557901314",
                            "name": "控件",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1663366773950439425",
                            "name": "柱形图",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1663366730652639234",
                            "name": "饼图",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1649240084416864257",
                    "name": "vue组件",
                    "icon": "icon-chart",
                    "children": [
                        {
                            "id": "1649241264748535810",
                            "name": "图表",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1649241264748535810",
                            "name": "图表",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1646153081643114498",
                    "name": "采集",
                    "icon": "icon-flow-arrow",
                    "children": [
                        {
                            "id": "1646723775078637569",
                            "name": "QQ",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1646153162379272193",
                            "name": "一号",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1646723775078637569",
                            "name": "QQ",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1646153162379272193",
                            "name": "一号",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1622555994070462465",
                    "name": "cate",
                    "icon": "icon-layout",
                    "children": [
                        {
                            "id": "1622556013980823553",
                            "name": "import13131312312312",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1622556013980823553",
                            "name": "import13131312312312",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1564525415961214977",
                    "name": "图表",
                    "icon": "icon-scatter-chart",
                    "children": [
                        {
                            "id": "1774708330476945409",
                            "name": "玫瑰图",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1773658341822775298",
                            "name": "111",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1685965295660867585",
                            "name": "1",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564526169769918466",
                            "name": "仪表盘",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564526146298593281",
                            "name": "折线图",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564526121707388930",
                            "name": "柱状图",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564526087905492993",
                            "name": "散点图",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564526062076968962",
                            "name": "雷达图",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564526030661632002",
                            "name": "图表",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564526030661632003",
                            "name": "饼图",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1774708330476945409",
                            "name": "玫瑰图",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1773658341822775298",
                            "name": "111",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1685965295660867585",
                            "name": "1",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564526169769918466",
                            "name": "仪表盘",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564526146298593281",
                            "name": "折线图",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564526121707388930",
                            "name": "柱状图",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564526087905492993",
                            "name": "散点图",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564526062076968962",
                            "name": "雷达图",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564526030661632002",
                            "name": "图表",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564526030661632003",
                            "name": "饼图",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1564525687764697090",
                    "name": "地图",
                    "icon": "icon-map",
                    "children": [
                        {
                            "id": "1638738370874101761",
                            "name": "图表",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564526004128464898",
                            "name": "地图",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1638738370874101761",
                            "name": "图表",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564526004128464898",
                            "name": "地图",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1564525799849082882",
                    "name": "文本",
                    "icon": "icon-title",
                    "children": [
                        {
                            "id": "1564525908062126081",
                            "name": "数字",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564525886159470593",
                            "name": "文本",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1564525908062126081",
                            "name": "数字",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564525886159470593",
                            "name": "文本",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1564525727392481281",
                    "name": "媒体",
                    "icon": "icon-media",
                    "children": [
                        {
                            "id": "1564525981454057474",
                            "name": "媒体",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1564525981454057474",
                            "name": "媒体",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1564525758279335938",
                    "name": "布局",
                    "icon": "icon-contain-box",
                    "children": [
                        {
                            "id": "1651791866452025346",
                            "name": "弹窗",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1650427738181378049",
                            "name": "颜色",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1628228004586991618",
                            "name": "背景",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564525954170109953",
                            "name": "导航栏",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564525932007407618",
                            "name": "流动箭头",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1651791866452025346",
                            "name": "弹窗",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1650427738181378049",
                            "name": "颜色",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1628228004586991618",
                            "name": "背景",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564525954170109953",
                            "name": "导航栏",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564525932007407618",
                            "name": "流动箭头",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1564525835823628290",
                    "name": "控件",
                    "icon": "icon-number-show",
                    "children": [
                        {
                            "id": "1625022514579124226",
                            "name": "下拉/",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564525861660540929",
                            "name": "按钮",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1625022514579124226",
                            "name": "下拉/",
                            "icon": null,
                            "components": null
                        },
                        {
                            "id": "1564525861660540929",
                            "name": "按钮",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1564525415961214976",
                    "name": "监控常用",
                    "icon": "icon-gauge-chart",
                    "children": [
                        {
                            "id": "1564525886159470592",
                            "name": "监控常用",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1564525886159470592",
                            "name": "监控常用",
                            "icon": null,
                            "components": null
                        }
                    ]
                },
                {
                    "id": "1564525415961214975",
                    "name": "未分类",
                    "icon": "icon-widget",
                    "children": [
                        {
                            "id": "1564525861660540928",
                            "name": "未分类",
                            "icon": null,
                            "components": null
                        }
                    ],
                    "subCategories": [
                        {
                            "id": "1564525861660540928",
                            "name": "未分类",
                            "icon": null,
                            "components": null
                        }
                    ]
                }
            ]
        }
    }

    @Post('list')
    async getList() {
        return {
            "code": 200,
            "msg": "SUCCESS",
            "data": {
                "curPage": 1,
                "pageSize": 10,
                "total": 225,
                "list": [
                    {
                        "id": "730771623475417088",
                        "isLib": true,
                        "name": "背景图",
                        "desc": "背景图",
                        "type": "project",
                        "automaticCover": "custom",
                        "allowDataSearch": 0,
                        "category": "1699259812124073986",
                        "cover": "",
                        "developStatus": "online",
                        "accountId": 110,
                        "projects": [
                            {
                                "id": "1698900730670260226",
                                "name": "开发测试",
                                "desc": "测试",
                                "creator": 1698883104376135700,
                                "updater": 1698883104376135700,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1693884473000,
                                "updateTime": 1693884473000,
                                "trades": null
                            },
                            {
                                "id": "1706593924971274241",
                                "name": "测试仪表盘",
                                "desc": null,
                                "creator": 1706593138082095000,
                                "updater": 1706593138082095000,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1695718673000,
                                "updateTime": 1695718673000,
                                "trades": null
                            },
                            {
                                "id": "1721447417448054785",
                                "name": "123333",
                                "desc": null,
                                "creator": 1613128193869365200,
                                "updater": 1613128193869365200,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1699260022000,
                                "updateTime": 1699260022000,
                                "trades": null
                            },
                            {
                                "id": "1721450417235247105",
                                "name": "test00001",
                                "desc": null,
                                "creator": 1613128193869365200,
                                "updater": 1613128193869365200,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1699260737000,
                                "updateTime": 1699260737000,
                                "trades": null
                            },
                            {
                                "id": "1696685685047599105",
                                "name": "测试项目",
                                "desc": null,
                                "creator": 1696685322512932900,
                                "updater": 1696685322512932900,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1693356365000,
                                "updateTime": 1693356365000,
                                "trades": null
                            },
                            {
                                "id": "1735116523657314305",
                                "name": "综合分析",
                                "desc": null,
                                "creator": 1735114997018738700,
                                "updater": 1735114997018738700,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1702518991000,
                                "updateTime": 1702518991000,
                                "trades": null
                            },
                            {
                                "id": "1735490921602039809",
                                "name": "项目测试飞鱼可用",
                                "desc": null,
                                "creator": 1735490433716404200,
                                "updater": 1735490433716404200,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1702608254000,
                                "updateTime": 1702608254000,
                                "trades": null
                            },
                            {
                                "id": "1736970927859646465",
                                "name": "ttt",
                                "desc": "",
                                "creator": 1736970086763282400,
                                "updater": 1737033688165728300,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1702961115000,
                                "updateTime": 1702976095000,
                                "trades": null
                            },
                            {
                                "id": "1737321407072780290",
                                "name": "shenzn",
                                "desc": "",
                                "creator": 1734467000136188000,
                                "updater": 1734467000136188000,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1703044676000,
                                "updateTime": 1703053730000,
                                "trades": null
                            },
                            {
                                "id": "1721709568880361473",
                                "name": "智慧校园",
                                "desc": "",
                                "creator": 1721708882604146700,
                                "updater": 1722160758923542500,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1699322524000,
                                "updateTime": 1699430470000,
                                "trades": null
                            },
                            {
                                "id": "1743089169913167873",
                                "name": "feixu_test",
                                "desc": null,
                                "creator": 1743085795872424000,
                                "updater": 1743085795872424000,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1704419818000,
                                "updateTime": 1704419818000,
                                "trades": null
                            },
                            {
                                "id": "1743190624456228866",
                                "name": "herman",
                                "desc": "测试",
                                "creator": 1743172089717801000,
                                "updater": 6789,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1704444006000,
                                "updateTime": 1704527622000,
                                "trades": null
                            },
                            {
                                "id": "1744748826507427842",
                                "name": "测试项目-20240109-001",
                                "desc": "测试项目-20240109-001",
                                "creator": 6410,
                                "updater": 6410,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1704815511000,
                                "updateTime": 1704815511000,
                                "trades": null
                            },
                            {
                                "id": "1751886676885585921",
                                "name": "酒店",
                                "desc": "酒店可视化",
                                "creator": 1751802401347682300,
                                "updater": 1751802401347682300,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1706517307000,
                                "updateTime": 1706517307000,
                                "trades": null
                            },
                            {
                                "id": "1753778035754090498",
                                "name": "测试项目2",
                                "desc": "aaa",
                                "creator": 1753777770565025800,
                                "updater": 1753777770565025800,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1706968242000,
                                "updateTime": 1706968242000,
                                "trades": null
                            },
                            {
                                "id": "1770713562092748802",
                                "name": "mzyl",
                                "desc": null,
                                "creator": 1770713277777657900,
                                "updater": 1770713277777657900,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1711005986000,
                                "updateTime": 1711005986000,
                                "trades": null
                            },
                            {
                                "id": "1776816649509355521",
                                "name": "员工",
                                "desc": null,
                                "creator": 1776537130001055700,
                                "updater": 1776537130001055700,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1712461076000,
                                "updateTime": 1712461076000,
                                "trades": null
                            },
                            {
                                "id": "1781634952484438017",
                                "name": "测试12",
                                "desc": null,
                                "creator": 1781634769025581000,
                                "updater": 1781634769025581000,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1713609849000,
                                "updateTime": 1713609849000,
                                "trades": null
                            },
                            {
                                "id": "1791125373572956162",
                                "name": "aaas",
                                "desc": null,
                                "creator": 1613128193869365200,
                                "updater": 1613128193869365200,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1715872541000,
                                "updateTime": 1715872541000,
                                "trades": null
                            }
                        ],
                        "creator": "test1199",
                        "subCategory": "1699259906596577281",
                        "tags": [],
                        "createTime": 1693970311000,
                        "updateTime": 1716274583000,
                        "version": "v1.0.1",
                        "dataConfig": {
                            "listeners": [],
                            "annotationValue": "",
                            "codeValue": "",
                            "optionsChilds": [],
                            "options": [
                                {
                                    "defaultValue": "13",
                                    "type": "123",
                                    "name": "123",
                                    "desc": "13"
                                }
                            ],
                            "events": [],
                            "markValue": ""
                        }
                    },
                    {
                        "id": "824316989012971520",
                        "isLib": false,
                        "name": "文本输入框",
                        "type": "project",
                        "automaticCover": "custom",
                        "allowDataSearch": 0,
                        "category": "1564525799849082882",
                        "developStatus": "doing",
                        "accountId": 110,
                        "projects": [
                            {
                                "id": "1792801136231661570",
                                "name": "ta大屏",
                                "desc": null,
                                "creator": 1768540861869670400,
                                "updater": 1768540861869670400,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1716272074000,
                                "updateTime": 1716272074000,
                                "trades": null
                            }
                        ],
                        "creator": "杨新",
                        "subCategory": "1564525886159470593",
                        "tags": [],
                        "createTime": 1716273264000,
                        "updateTime": 1716273264000,
                        "version": "暂未上线",
                        "dataConfig": {}
                    },
                    {
                        "id": "823893682832805888",
                        "isLib": false,
                        "name": "yy",
                        "type": "project",
                        "automaticCover": "custom",
                        "allowDataSearch": 0,
                        "category": "1564525415961214976",
                        "cover": "",
                        "developStatus": "doing",
                        "accountId": 110,
                        "projects": [
                            {
                                "id": "1791866292622409730",
                                "name": "test-001",
                                "desc": null,
                                "creator": 6410,
                                "updater": 6410,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1716049190000,
                                "updateTime": 1716049190000,
                                "trades": null
                            }
                        ],
                        "creator": "weiyang",
                        "subCategory": "1564525886159470592",
                        "tags": [],
                        "createTime": 1716172340000,
                        "updateTime": 1716172446000,
                        "version": "暂未上线",
                        "dataConfig": {
                            "listeners": [],
                            "annotationValue": "",
                            "codeValue": "",
                            "optionsChilds": [],
                            "options": [],
                            "events": [],
                            "markValue": ""
                        }
                    },
                    {
                        "id": "785998889830322176",
                        "isLib": false,
                        "name": "test20240205-z001",
                        "type": "project",
                        "automaticCover": "custom",
                        "allowDataSearch": 0,
                        "category": "1751890782698160130",
                        "cover": "",
                        "developStatus": "online",
                        "accountId": 110,
                        "projects": [
                            {
                                "id": "1754483844406394882",
                                "name": "test20240205",
                                "desc": null,
                                "creator": 1754482036074168300,
                                "updater": 1754482036074168300,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1707136520000,
                                "updateTime": 1707136520000,
                                "trades": null
                            }
                        ],
                        "creator": "cooldaniel",
                        "subCategory": "1751890920648818689",
                        "tags": [],
                        "createTime": 1707137517000,
                        "updateTime": 1716170374000,
                        "version": "v1.0.0",
                        "dataConfig": {
                            "listeners": [],
                            "annotationValue": "",
                            "codeValue": "",
                            "optionsChilds": [],
                            "options": [],
                            "events": [],
                            "markValue": ""
                        }
                    },
                    {
                        "id": "805169330914332672",
                        "isLib": false,
                        "name": "test12饼图-复制",
                        "type": "project",
                        "automaticCover": "custom",
                        "allowDataSearch": 0,
                        "category": "1751890782698160130",
                        "cover": "",
                        "developStatus": "doing",
                        "accountId": 110,
                        "projects": [
                            {
                                "id": "1752503706282180610",
                                "name": "test13",
                                "desc": null,
                                "creator": 1752503289825542100,
                                "updater": 1752503289825542100,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1706664418000,
                                "updateTime": 1706664418000,
                                "trades": null
                            }
                        ],
                        "creator": "1",
                        "subCategory": "1751890920648818689",
                        "tags": [],
                        "createTime": 1711708106000,
                        "updateTime": 1716170304000,
                        "version": "暂未上线",
                        "dataConfig": {
                            "listeners": [],
                            "annotationValue": "",
                            "codeValue": "",
                            "optionsChilds": [],
                            "options": [],
                            "events": [],
                            "markValue": ""
                        }
                    },
                    {
                        "id": "821338922183299072",
                        "isLib": false,
                        "name": "测试组件2",
                        "type": "project",
                        "automaticCover": "custom",
                        "allowDataSearch": 0,
                        "category": "1564525687764697090",
                        "cover": "",
                        "developStatus": "doing",
                        "accountId": 110,
                        "projects": [
                            {
                                "id": "1789827133854531586",
                                "name": "大屏数据管理",
                                "desc": null,
                                "creator": 1789826605154123800,
                                "updater": 1789826605154123800,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1715563017000,
                                "updateTime": 1715563017000,
                                "trades": null
                            }
                        ],
                        "creator": "zczAdmin",
                        "subCategory": "1564526004128464898",
                        "tags": [],
                        "createTime": 1715563238000,
                        "updateTime": 1715904360000,
                        "version": "暂未上线",
                        "dataConfig": {
                            "listeners": [],
                            "annotationValue": "",
                            "codeValue": "",
                            "optionsChilds": [],
                            "options": [],
                            "events": [],
                            "markValue": ""
                        }
                    },
                    {
                        "id": "821368036093071360",
                        "isLib": false,
                        "name": "业务订单",
                        "type": "project",
                        "automaticCover": "custom",
                        "allowDataSearch": 0,
                        "category": "1564525415961214975",
                        "cover": "",
                        "developStatus": "online",
                        "accountId": 110,
                        "projects": [
                            {
                                "id": "1693813866170982402",
                                "name": "kevin_test",
                                "desc": "1",
                                "creator": 1664555946501775400,
                                "updater": 1664555946501775400,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1692671670000,
                                "updateTime": 1693470727000,
                                "trades": null
                            }
                        ],
                        "creator": "kevin_2233",
                        "subCategory": "1564525861660540928",
                        "tags": [],
                        "createTime": 1715570178000,
                        "updateTime": 1715904351000,
                        "version": "v1.0.0",
                        "dataConfig": {
                            "listeners": [],
                            "annotationValue": "",
                            "codeValue": "",
                            "optionsChilds": [],
                            "options": [],
                            "events": [],
                            "markValue": ""
                        }
                    },
                    {
                        "id": "822196746723528704",
                        "isLib": false,
                        "name": "0515-test",
                        "type": "project",
                        "automaticCover": "custom",
                        "allowDataSearch": 0,
                        "category": "1564525687764697090",
                        "developStatus": "doing",
                        "accountId": 110,
                        "projects": [
                            {
                                "id": "1790685016481677314",
                                "name": "0515",
                                "desc": null,
                                "creator": 1790684379278819300,
                                "updater": 1790684379278819300,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1715767552000,
                                "updateTime": 1715767552000,
                                "trades": null
                            }
                        ],
                        "creator": "migo",
                        "subCategory": "1564526004128464898",
                        "tags": [],
                        "createTime": 1715767759000,
                        "updateTime": 1715767759000,
                        "version": "暂未上线",
                        "dataConfig": {}
                    },
                    {
                        "id": "821809380120858624",
                        "isLib": false,
                        "name": "北京图",
                        "type": "project",
                        "automaticCover": "custom",
                        "allowDataSearch": 0,
                        "category": "1777630828654837761",
                        "cover": "/lcapWeb/www/components/821809380120858624/v-current/components/cover.jpeg",
                        "developStatus": "doing",
                        "accountId": 110,
                        "projects": [
                            {
                                "id": "1789827133854531586",
                                "name": "大屏数据管理",
                                "desc": null,
                                "creator": 1789826605154123800,
                                "updater": 1789826605154123800,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1715563017000,
                                "updateTime": 1715563017000,
                                "trades": null
                            }
                        ],
                        "creator": "trz",
                        "subCategory": "1777630878856462338",
                        "tags": [],
                        "createTime": 1715675404000,
                        "updateTime": 1715675404000,
                        "version": "暂未上线",
                        "dataConfig": {}
                    },
                    {
                        "id": "821803495671730176",
                        "isLib": false,
                        "name": "聚合散点图",
                        "type": "project",
                        "automaticCover": "auto",
                        "allowDataSearch": 0,
                        "category": "1790285585429118978",
                        "developStatus": "doing",
                        "accountId": 110,
                        "projects": [
                            {
                                "id": "1790276564445904898",
                                "name": "运维001",
                                "desc": "",
                                "creator": 1790275077422530600,
                                "updater": 1790275077422530600,
                                "creatorName": null,
                                "accountId": 110,
                                "createTime": 1715670169000,
                                "updateTime": 1715674143000,
                                "trades": null
                            }
                        ],
                        "creator": "郭语馨",
                        "subCategory": "1790285846042198017",
                        "tags": [],
                        "createTime": 1715674001000,
                        "updateTime": 1715674001000,
                        "version": "暂未上线",
                        "dataConfig": {}
                    }
                ]
            }
        }
    }

    @Post('list-with-id-name')
    async listWithIdName () {
        return {
            "code": 200,
            "msg": "SUCCESS",
            "data": {
                "curPage": 0,
                "pageSize": 1000,
                "total": 9,
                "list": [
                    {
                        "id": "820371888498806784",
                        "isLib": false,
                        "name": "12111",
                        "type": "common",
                        "automaticCover": "custom",
                        "allowDataSearch": 0,
                        "category": "1775357976928927746",
                        "developStatus": "online",
                        "accountId": 110,
                        "projects": [],
                        "creator": "weiyang",
                        "subCategory": "1775358171062288386",
                        "tags": [],
                        "createTime": 1715332679000,
                        "updateTime": 1715332679000,
                        "version": "v1.0.0",
                        "dataConfig": {}
                    },
                    {
                        "id": "605786898743656448",
                        "isLib": false,
                        "name": "渐变折线图",
                        "type": "common",
                        "automaticCover": "custom",
                        "allowDataSearch": 0,
                        "category": "1758344889965297666",
                        "cover": "",
                        "developStatus": "online",
                        "accountId": 110,
                        "projects": [],
                        "creator": "weiyang",
                        "subCategory": "1758353587450232834",
                        "tags": [],
                        "createTime": 1678780971000,
                        "updateTime": 1712922613000,
                        "version": "v1.0.0",
                        "dataConfig": {
                            "listeners": [],
                            "annotationValue": "",
                            "codeValue": "",
                            "optionsChilds": [],
                            "options": [],
                            "events": [],
                            "markValue": ""
                        }
                    },
                    {
                        "id": "605784948509736960",
                        "isLib": false,
                        "name": "动环裂变饼图",
                        "type": "common",
                        "automaticCover": "custom",
                        "allowDataSearch": 0,
                        "category": "1758344889965297666",
                        "cover": "",
                        "developStatus": "online",
                        "accountId": 110,
                        "projects": [],
                        "creator": "weiyang",
                        "subCategory": "1758353587450232834",
                        "tags": [],
                        "createTime": 1708059654000,
                        "updateTime": 1712919369000,
                        "version": "v1.0.0",
                        "dataConfig": {
                            "listeners": [],
                            "annotationValue": "大屏展示",
                            "codeValue": "",
                            "optionsChilds": [],
                            "options": [],
                            "events": [],
                            "markValue": ""
                        }
                    },
                    {
                        "id": "61aa27abd39bdf74f6d60142",
                        "isLib": false,
                        "name": "图片",
                        "type": "common",
                        "automaticCover": "custom",
                        "allowDataSearch": 0,
                        "category": "1564525415961214975",
                        "cover": "/lcapWeb/www/components/61aa27abd39bdf74f6d60142/v1.0.0/release/cover.jpeg",
                        "developStatus": "online",
                        "accountId": 110,
                        "projects": [],
                        "creator": "weiyang",
                        "subCategory": "1564525861660540928",
                        "tags": [],
                        "createTime": 1675680625000,
                        "updateTime": 1710231401000,
                        "version": "v1.0.0",
                        "dataConfig": {}
                    },
                    {
                        "id": "605785223853211648",
                        "isLib": false,
                        "name": "分层进度条",
                        "type": "common",
                        "automaticCover": "custom",
                        "allowDataSearch": 0,
                        "category": "1758344889965297666",
                        "cover": "",
                        "developStatus": "online",
                        "accountId": 110,
                        "projects": [],
                        "creator": "weiyang",
                        "subCategory": "1758353587450232834",
                        "tags": [],
                        "createTime": 1683598097000,
                        "updateTime": 1708305987000,
                        "version": "v1.0.0",
                        "dataConfig": {
                            "listeners": [],
                            "annotationValue": "",
                            "codeValue": "",
                            "optionsChilds": [
                                {
                                    "datas": [
                                        {
                                            "defaultValue": "d",
                                            "type": "dd",
                                            "parentName": "",
                                            "name": "d",
                                            "desc": "d"
                                        }
                                    ],
                                    "name": "",
                                    "key": 0
                                }
                            ],
                            "options": [],
                            "events": [
                                {
                                    "param": "e",
                                    "name": "f",
                                    "desc": "32"
                                }
                            ],
                            "markValue": "dds"
                        }
                    },
                    {
                        "id": "61f120df459f0d1d02e26fea",
                        "isLib": false,
                        "name": "自定义区间地图",
                        "type": "common",
                        "automaticCover": "custom",
                        "allowDataSearch": 0,
                        "category": "1564525415961214975",
                        "cover": "/lcapWeb/www/components/61f120df459f0d1d02e26fea/v1.0.0/release/cover.png",
                        "developStatus": "online",
                        "accountId": 110,
                        "projects": [],
                        "creator": "weiyang",
                        "subCategory": "1564525861660540928",
                        "tags": [],
                        "createTime": 1708059943000,
                        "updateTime": 1708059943000,
                        "version": "v1.0.0",
                        "dataConfig": {}
                    },
                    {
                        "id": "605784696625004544",
                        "isLib": false,
                        "name": "地图路线图",
                        "type": "common",
                        "automaticCover": "custom",
                        "allowDataSearch": 0,
                        "category": "1564525415961214975",
                        "cover": "/lcapWeb/www/components/605784696625004544/v1.0.0/release/cover.jpeg",
                        "developStatus": "online",
                        "accountId": 110,
                        "projects": [],
                        "creator": "weiyang",
                        "subCategory": "1564525861660540928",
                        "tags": [],
                        "createTime": 1708059060000,
                        "updateTime": 1708059060000,
                        "version": "v1.0.0",
                        "dataConfig": {}
                    },
                    {
                        "id": "61aa27acd39bdf74f6d6024a",
                        "isLib": false,
                        "name": "时间",
                        "type": "common",
                        "automaticCover": "custom",
                        "allowDataSearch": 0,
                        "category": "1564525415961214975",
                        "cover": "/lcapWeb/www/components/61aa27acd39bdf74f6d6024a/v1.0.0/release/cover.jpeg",
                        "developStatus": "online",
                        "accountId": 110,
                        "projects": [],
                        "creator": "weiyang",
                        "subCategory": "1564525861660540928",
                        "tags": [],
                        "createTime": 1675680625000,
                        "updateTime": 1708059002000,
                        "version": "v1.0.0",
                        "dataConfig": {}
                    },
                    {
                        "id": "61aa27acd39bdf74f6d602d2",
                        "isLib": true,
                        "name": "按钮二",
                        "type": "common",
                        "automaticCover": "custom",
                        "allowDataSearch": 0,
                        "category": "1564525835823628290",
                        "cover": "/lcapWeb/www/components/61aa27acd39bdf74f6d602d2/v-current/components/cover.jpeg",
                        "developStatus": "online",
                        "accountId": -1,
                        "projects": [],
                        "creator": "weiyang",
                        "subCategory": "1564525861660540929",
                        "tags": [],
                        "createTime": 1675680625000,
                        "updateTime": 1675680625000,
                        "version": "v1.0.0",
                        "dataConfig": {}
                    }
                ]
            }
        }
    }

    @Post('list-with-category')
    async listWithCategory () {
        return {
            "code": 200,
            "msg": "SUCCESS",
            "data": [
                {
                    "id": "1775357976928927746",
                    "name": "所有",
                    "icon": "icon-chart",
                    "subCategories": [
                        {
                            "id": "1775358171062288386",
                            "name": "全部",
                            "icon": null,
                            "components": [
                                {
                                    "id": "820371888498806784",
                                    "isLib": false,
                                    "name": "12111",
                                    "type": "common",
                                    "automaticCover": "custom",
                                    "allowDataSearch": 0,
                                    "category": "1775357976928927746",
                                    "developStatus": "online",
                                    "accountId": 110,
                                    "creator": "1613128193869365249",
                                    "subCategory": "1775358171062288386",
                                    "createTime": 1715332679000,
                                    "updateTime": 1715332679000,
                                    "version": "v1.0.0"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "1758344889965297666",
                    "name": "zikz",
                    "icon": "icon-chart",
                    "subCategories": [
                        {
                            "id": "1758353587450232834",
                            "name": "好用",
                            "icon": null,
                            "components": [
                                {
                                    "id": "605784948509736960",
                                    "isLib": false,
                                    "name": "动环裂变饼图",
                                    "type": "common",
                                    "automaticCover": "custom",
                                    "allowDataSearch": 0,
                                    "category": "1758344889965297666",
                                    "cover": "",
                                    "developStatus": "online",
                                    "accountId": 110,
                                    "creator": "1758115070912577538",
                                    "subCategory": "1758353587450232834",
                                    "createTime": 1708059654000,
                                    "updateTime": 1712919369000,
                                    "version": "v1.0.0",
                                    "dataConfig": "{\"annotationValue\":\"大屏展示\",\"codeValue\":\"\",\"options\":[],\"optionsChilds\":[],\"events\":[],\"listeners\":[],\"markValue\":\"\"}"
                                },
                                {
                                    "id": "605785223853211648",
                                    "isLib": false,
                                    "name": "分层进度条",
                                    "type": "common",
                                    "automaticCover": "custom",
                                    "allowDataSearch": 0,
                                    "category": "1758344889965297666",
                                    "cover": "",
                                    "developStatus": "online",
                                    "accountId": 110,
                                    "creator": "1758115070912577538",
                                    "subCategory": "1758353587450232834",
                                    "createTime": 1683598097000,
                                    "updateTime": 1708305987000,
                                    "version": "v1.0.0",
                                    "dataConfig": "{\"annotationValue\":\"\",\"codeValue\":\"\",\"options\":[],\"optionsChilds\":[{\"datas\":[{\"name\":\"d\",\"desc\":\"d\",\"type\":\"dd\",\"defaultValue\":\"d\",\"parentName\":\"\"}],\"name\":\"\",\"key\":0}],\"events\":[{\"name\":\"f\",\"param\":\"e\",\"desc\":\"32\"}],\"listeners\":[],\"markValue\":\"dds\"}"
                                },
                                {
                                    "id": "605786898743656448",
                                    "isLib": false,
                                    "name": "渐变折线图",
                                    "type": "common",
                                    "automaticCover": "custom",
                                    "allowDataSearch": 0,
                                    "category": "1758344889965297666",
                                    "cover": "",
                                    "developStatus": "online",
                                    "accountId": 110,
                                    "creator": "1758115070912577538",
                                    "subCategory": "1758353587450232834",
                                    "createTime": 1678780971000,
                                    "updateTime": 1712922613000,
                                    "version": "v1.0.0",
                                    "dataConfig": "{\"annotationValue\":\"\",\"codeValue\":\"\",\"options\":[],\"optionsChilds\":[],\"events\":[],\"listeners\":[],\"markValue\":\"\"}"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "1564525835823628290",
                    "name": "控件",
                    "icon": "icon-number-show",
                    "subCategories": [
                        {
                            "id": "1564525861660540929",
                            "name": "按钮",
                            "icon": null,
                            "components": [
                                {
                                    "id": "61aa27acd39bdf74f6d602d2",
                                    "isLib": true,
                                    "name": "按钮二",
                                    "type": "common",
                                    "automaticCover": "custom",
                                    "allowDataSearch": 0,
                                    "category": "1564525835823628290",
                                    "cover": "/lcapWeb/www/components/61aa27acd39bdf74f6d602d2/v-current/components/cover.jpeg",
                                    "developStatus": "online",
                                    "accountId": -1,
                                    "subCategory": "1564525861660540929",
                                    "createTime": 1675680625000,
                                    "updateTime": 1675680625000,
                                    "version": "v1.0.0"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "1564525415961214975",
                    "name": "未分类",
                    "icon": "icon-widget",
                    "subCategories": [
                        {
                            "id": "1564525861660540928",
                            "name": "未分类",
                            "icon": null,
                            "components": [
                                {
                                    "id": "605784696625004544",
                                    "isLib": false,
                                    "name": "地图路线图",
                                    "type": "common",
                                    "automaticCover": "custom",
                                    "allowDataSearch": 0,
                                    "category": "1564525415961214975",
                                    "cover": "/lcapWeb/www/components/605784696625004544/v1.0.0/release/cover.jpeg",
                                    "developStatus": "online",
                                    "accountId": 110,
                                    "creator": "1758115070912577538",
                                    "subCategory": "1564525861660540928",
                                    "createTime": 1708059060000,
                                    "updateTime": 1708059060000,
                                    "version": "v1.0.0"
                                },
                                {
                                    "id": "61aa27abd39bdf74f6d60142",
                                    "isLib": false,
                                    "name": "图片",
                                    "type": "common",
                                    "automaticCover": "custom",
                                    "allowDataSearch": 0,
                                    "category": "1564525415961214975",
                                    "cover": "/lcapWeb/www/components/61aa27abd39bdf74f6d60142/v1.0.0/release/cover.jpeg",
                                    "developStatus": "online",
                                    "accountId": 110,
                                    "creator": "6972",
                                    "subCategory": "1564525861660540928",
                                    "createTime": 1675680625000,
                                    "updateTime": 1710231401000,
                                    "version": "v1.0.0"
                                },
                                {
                                    "id": "61aa27acd39bdf74f6d6024a",
                                    "isLib": false,
                                    "name": "时间",
                                    "type": "common",
                                    "automaticCover": "custom",
                                    "allowDataSearch": 0,
                                    "category": "1564525415961214975",
                                    "cover": "/lcapWeb/www/components/61aa27acd39bdf74f6d6024a/v1.0.0/release/cover.jpeg",
                                    "developStatus": "online",
                                    "accountId": 110,
                                    "creator": "1758115070912577538",
                                    "subCategory": "1564525861660540928",
                                    "createTime": 1675680625000,
                                    "updateTime": 1708059002000,
                                    "version": "v1.0.0"
                                },
                                {
                                    "id": "61f120df459f0d1d02e26fea",
                                    "isLib": false,
                                    "name": "自定义区间地图",
                                    "type": "common",
                                    "automaticCover": "custom",
                                    "allowDataSearch": 0,
                                    "category": "1564525415961214975",
                                    "cover": "/lcapWeb/www/components/61f120df459f0d1d02e26fea/v1.0.0/release/cover.png",
                                    "developStatus": "online",
                                    "accountId": 110,
                                    "creator": "1758115070912577538",
                                    "subCategory": "1564525861660540928",
                                    "createTime": 1708059943000,
                                    "updateTime": 1708059943000,
                                    "version": "v1.0.0"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }


}

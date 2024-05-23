import {Controller, Get, Post} from '@nestjs/common';

@Controller('datasource')
export class DatasourceController {

    @Get('findAll')
    async getAll() {
        return {
            "code": 200,
            "msg": "SUCCESS",
            "data": {
                "pageNo": 1,
                "pageSize": 10,
                "total": 14,
                "data": [
                    {
                        "datasourceId": "738113661258698752",
                        "datasourceName": "test_2",
                        "schemaName": "xinyuebao",
                        "schemaType": "MySQL",
                        "connectData": "{\"datasourceName\":\"test_2\",\"servers\":\"jdbc:mysql://sh-cynosdbmysql-grp-dtim2j3w.sql.tencentcdb.com:23524/xinyuebao?useUnicode=true&characterEncoding=utf-8&useSSL=false&allowMultiQueries=true&autoReconnect=true\",\"schemaName\":\"xinyuebao\",\"username\":\"root\",\"password\":\"qwer@1234\"}",
                        "accountId": 110,
                        "deleted": 0,
                        "creator": 1695977610137346000,
                        "updater": 6410,
                        "createTime": 1695720788000,
                        "updateTime": 1716277521000
                    },
                    {
                        "datasourceId": "768524713200717824",
                        "datasourceName": "测试",
                        "schemaName": "erdonline",
                        "schemaType": "MySQL",
                        "connectData": "{\"datasourceName\":\"测试\",\"servers\":\"jdbc:mysql://mysql.sqlpub.com:3306/erdonline?characterEncoding=UTF-8&useSSL=false&useUnicode=true&serverTimezone=UTC\",\"schemaName\":\"erdonline\",\"username\":\"erdonline\",\"password\":\"274623019c590e8f\"}",
                        "accountId": 110,
                        "deleted": 0,
                        "creator": 1737013431195746300,
                        "updater": 1780899063718297600,
                        "createTime": 1702971347000,
                        "updateTime": 1713786723000
                    },
                    {
                        "datasourceId": "804733114293161984",
                        "datasourceName": "xyy_ph",
                        "schemaName": "mysql",
                        "schemaType": "HTTP",
                        "connectData": "{\"datasourceName\":\"xyy_ph\",\"url\":\"http://api.heclouds.com/devices/1201589727/datastreams/PH\",\"schemaName\":\"mysql\",\"method\":\"get\",\"header\":[{\"type\":\"String\",\"required\":false,\"default\":\"0M17Dj7142p4L8xRosCR6Z05W=g=\",\"name\":\"api-key\",\"state\":false,\"key\":0.5799957410053524}],\"params\":[],\"requestBody\":{\"type\":\"text\",\"value\":\"\"}}",
                        "accountId": 110,
                        "deleted": 0,
                        "creator": 6410,
                        "updater": 1763023073130397700,
                        "createTime": 1711604103000,
                        "updateTime": 1712022248000
                    },
                    {
                        "datasourceId": "804732902682136576",
                        "datasourceName": "xyy_temp",
                        "schemaName": "mysql",
                        "schemaType": "HTTP",
                        "connectData": "{\"method\":\"get\",\"params\":[],\"url\":\"http://api.heclouds.com/devices/1201589727/datastreams/Temp\",\"requestBody\":{\"type\":\"json\",\"value\":\"\"},\"header\":[{\"type\":\"String\",\"required\":false,\"default\":\"0M17Dj7142p4L8xRosCR6Z05W=g=\",\"name\":\"api-key\",\"state\":false,\"key\":0.4408159632618347}]}",
                        "accountId": 110,
                        "deleted": 0,
                        "creator": 6410,
                        "updater": 6410,
                        "createTime": 1711604053000,
                        "updateTime": 1711604053000
                    },
                    {
                        "datasourceId": "804696905768505344",
                        "datasourceName": "xyy",
                        "schemaName": "mysql",
                        "schemaType": "HTTP",
                        "connectData": "{\"datasourceName\":\"xyy\",\"url\":\"http://api.heclouds.com/devices/1201589727/datastreams/TDS\",\"schemaName\":\"http\",\"method\":\"get\",\"header\":[{\"type\":\"String\",\"required\":true,\"default\":\"0M17Dj7142p4L8xRosCR6Z05W=g=\",\"name\":\"api-key\",\"state\":false,\"key\":0.2463778299443753}],\"params\":[],\"requestBody\":{\"type\":\"json\",\"value\":\"\"}}",
                        "accountId": 110,
                        "deleted": 0,
                        "creator": 6410,
                        "updater": 6410,
                        "createTime": 1711595470000,
                        "updateTime": 1711596396000
                    },
                    {
                        "datasourceId": "801149921761693696",
                        "datasourceName": "http",
                        "schemaName": "http",
                        "schemaType": "HTTP",
                        "connectData": "{\"datasourceName\":\"http\",\"url\":\"http://api.zhuishushenqi.com/cats/lv2/statistics\",\"schemaName\":\"http\",\"method\":\"get\",\"header\":[{\"state\":false,\"key\":0.4952899112625926,\"noExpend\":true,\"name\":\"asd\",\"type\":\"String\",\"required\":false}],\"params\":[],\"requestBody\":{\"type\":\"json\",\"value\":\"\"}}",
                        "accountId": 110,
                        "deleted": 0,
                        "creator": 1768540861869670400,
                        "updater": 1769316074366517200,
                        "createTime": 1710749803000,
                        "updateTime": 1711457207000
                    },
                    {
                        "datasourceId": "784499423440801792",
                        "datasourceName": "yinqitest",
                        "schemaName": "yinqitest",
                        "schemaType": "HTTP",
                        "connectData": "{\"datasourceName\":\"yinqitest\",\"url\":\"https://api.jeecg.com/mock/26/pie\",\"schemaName\":\"yinqitest\",\"method\":\"get\",\"header\":[],\"params\":[],\"requestBody\":{\"type\":\"json\",\"value\":\"\"}}",
                        "accountId": 110,
                        "deleted": 0,
                        "creator": 1752980203522572300,
                        "updater": 1752980203522572300,
                        "createTime": 1706780015000,
                        "updateTime": 1706780088000
                    },
                    {
                        "datasourceId": "778776487903891456",
                        "datasourceName": "pzl-api",
                        "schemaName": "za",
                        "schemaType": "HTTP",
                        "connectData": "{\"datasourceName\":\"pzl-api\",\"url\":\"?url=https://zabbix.chat54.xyz/api_jsonrpc.php\",\"schemaName\":\"za2\",\"method\":\"get\",\"header\":[{\"type\":\"String\",\"required\":false,\"default\":\"application/json-rpc\",\"name\":\"Content-Type\",\"state\":false,\"key\":0.3459839451098279}],\"params\":[{\"type\":\"String\",\"required\":true,\"default\":\"https://zabbix.chat54.xyz/api_jsonrpc.php\",\"name\":\"url\",\"state\":false,\"key\":0.8246814054385543}],\"requestBody\":{\"type\":\"text\",\"value\":\"{\\n    \\\"jsonrpc\\\": \\\"2.0\\\",\\n    \\\"method\\\": \\\"host.get\\\",\\n    \\\"params\\\": {\\n               \\\"filter\\\": {\\n               \\\"host\\\": [\\n                       \\\"Zabbix server\\\",\\n                       \\\"Linux server\\\"\\n                   ]\\n               }\\n    },\\n           \\\"auth\\\": \\\"27e72ac7ba8c81950daa8425419dbae4f4026abe936c83785312fcda5d2627a0\\\",\\n           \\\"id\\\": 1\\n}\"}}",
                        "accountId": 110,
                        "deleted": 0,
                        "creator": 1747261426575163400,
                        "updater": 1752980203522572300,
                        "createTime": 1705415561000,
                        "updateTime": 1706779701000
                    },
                    {
                        "datasourceId": "767406315658022912",
                        "datasourceName": "jingma",
                        "schemaName": "jingma",
                        "schemaType": "HTTP",
                        "connectData": "{\"datasourceName\":\"jingma\",\"url\":\" https://ctbx.trimdata.cn:8033/sjds-ht/default\",\"schemaName\":\"jingma\",\"method\":\"post\",\"header\":[],\"params\":[],\"requestBody\":{\"type\":\"json\",\"value\":\"{\\n  \\\"title\\\": \\\"名称\\\",\\n  \\\"type\\\": \\\"object\\\",\\n  \\\"required\\\": [\\n    \\\"name\\\"\\n  ],\\n  \\\"properties\\\": {\\n    \\\"name\\\": {\\n      \\\"type\\\": \\\"string\\\",\\n      \\\"description\\\": \\\"这是一条描述信息\\\",\\n      \\\"minLength\\\": 4,\\n      \\\"default\\\": \\\"Jeremy\\\"\\n    }\\n  }\\n}\"}}",
                        "accountId": 110,
                        "deleted": 0,
                        "creator": 1735889469879435300,
                        "updater": 6410,
                        "createTime": 1702704701000,
                        "updateTime": 1706412249000
                    },
                    {
                        "datasourceId": "760911318158938112",
                        "datasourceName": "ces",
                        "schemaName": "ceshi",
                        "schemaType": "HTTP",
                        "connectData": "{\"datasourceName\":\"ces\",\"url\":\"http://kbp.keyunzhihui.com/kbp/dcs/pbs/auth/login\",\"schemaName\":\"ceshi\",\"method\":\"post\",\"header\":[],\"params\":[],\"requestBody\":{\"type\":\"text\",\"value\":\"{\\n  \\\"root\\\": {\\n    \\\"type\\\": \\\"object\\\",\\n    \\\"title\\\": \\\"title\\\",\\n    \\\"properties\\\": {\\n      \\\"username\\\": {\\n        \\\"type\\\": \\\"string\\\",\\n        \\\"title\\\": \\\"用户名\\\"\\n      },\\n      \\\"password\\\": {\\n        \\\"type\\\": \\\"string\\\",\\n        \\\"title\\\": \\\"密码\\\"\\n      }\\n    }\\n  }\\n}\"}}",
                        "accountId": 110,
                        "deleted": 0,
                        "creator": 1729398376165884000,
                        "updater": 1729398376165884000,
                        "createTime": 1701156173000,
                        "updateTime": 1701158871000
                    }
                ]
            }
        }
    }

    @Post('deleteById')
    async deleteById() {
        return {
            "code": 500,
            "msg": "该数据库正在被数据查询引用,不能删除",
            "data": null
        }
    }
}

import {Controller, Get, Inject} from '@nestjs/common';
import {TradesService} from "./trades.service";

@Controller('trades')
export class TradesController {

    @Inject()
    private readonly tradesService: TradesService

    @Get('')
    async info() {
        const res = await this.tradesService.list()
        return {
            list: res
        }
        // return {
        //     "code": 1,
        //     "msg": "SUCCESS",
        //     "data": {
        //         "curPage": null,
        //         "pageSize": null,
        //         "total": null,
        //         "list": [
        //             {
        //                 "id": "1792426816334544897",
        //                 "name": "demo-my",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1790639676395175937",
        //                 "name": "人力资源",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1790276553444245506",
        //                 "name": "aq",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1786345838180646914",
        //                 "name": "aaa",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1785854902136815618",
        //                 "name": "asdf",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1784489108236746753",
        //                 "name": "环保",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1784486531457695745",
        //                 "name": "供销社",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1783690267447083010",
        //                 "name": "wwwwwwwwwwww",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1783050036490354689",
        //                 "name": "895307070",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1782668460388597761",
        //                 "name": "wu ",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1781279276163743746",
        //                 "name": "大数据分析",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1780902862423932930",
        //                 "name": "yx",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1778066984118861825",
        //                 "name": "阿萨德",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1777330680871600130",
        //                 "name": "gfd",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1777211160341331969",
        //                 "name": "城管",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1776207364085596162",
        //                 "name": "物流",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1776088998792478722",
        //                 "name": "gdy",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1773677779829735426",
        //                 "name": "软件",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1773594225645010945",
        //                 "name": "能源",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1772906924975669250",
        //                 "name": "thewalk",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1772648056706121730",
        //                 "name": "点",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1771149533137420290",
        //                 "name": "水利",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1770710854493356033",
        //                 "name": "aaaaa",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1770001853568860161",
        //                 "name": "机械制造",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1769980194799566850",
        //                 "name": "xxx",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1769284169424257025",
        //                 "name": "其它",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1768923093968961538",
        //                 "name": "无人机",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1768168253999366146",
        //                 "name": "绿色建筑",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1763016855317987330",
        //                 "name": "百货",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1762000792082006017",
        //                 "name": "保险",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1760593738729603073",
        //                 "name": "工厂",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1760525195937923073",
        //                 "name": "sdadad",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1760212162988556289",
        //                 "name": "iot",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1758341203750895617",
        //                 "name": "bushuyu ",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1758329015925555201",
        //                 "name": "零售",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1758115212155764737",
        //                 "name": "传染病",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1755498096348971009",
        //                 "name": "huaiwei",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1754769343457083394",
        //                 "name": "test174",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1754692407212982273",
        //                 "name": "地方项目",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1752925134546616322",
        //                 "name": "suibian",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1752161649244061697",
        //                 "name": "安全",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1751596183362551810",
        //                 "name": "广播电视",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1749244481472905217",
        //                 "name": "fdsawsxdfrt234",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1747518758701842433",
        //                 "name": "TGHJ",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1744896050600165378",
        //                 "name": "PZ1A",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1744893266748325890",
        //                 "name": "gongye",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1743089169896390658",
        //                 "name": "dianzi",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1740559993083609090",
        //                 "name": "工业",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1740548372697268226",
        //                 "name": "·",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1732215223558946818",
        //                 "name": "1233333333333333",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1731871154680971265",
        //                 "name": "ces ",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1729463763582664706",
        //                 "name": "fv bdv ",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1729067822660796418",
        //                 "name": "政府",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1727221046429433857",
        //                 "name": "ert",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1722865987776233474",
        //                 "name": "Test测试",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1722173867646074882",
        //                 "name": "医疗健康",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1711287707247878145",
        //                 "name": "dashuju",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1710819032753545218",
        //                 "name": "znzz",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1701836796238798850",
        //                 "name": "畜牧业",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1701507317343756290",
        //                 "name": "test_y",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1698575590942089218",
        //                 "name": "TEST",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1697496107912830977",
        //                 "name": "22",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1696413938608021505",
        //                 "name": "测试业",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1696102651315396609",
        //                 "name": "test1",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1694961486004264962",
        //                 "name": "asd",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1694324324170768385",
        //                 "name": "yyy",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1691979702815727618",
        //                 "name": "ITSM",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1687188095507668993",
        //                 "name": "服务",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1686267488754507777",
        //                 "name": "制造页",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1684398003709845506",
        //                 "name": "industry",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1683753650150744066",
        //                 "name": "运维",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1681466734365679618",
        //                 "name": "ff",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1680845424035930114",
        //                 "name": "qwer",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1679778023559176194",
        //                 "name": "web",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1679521649390559233",
        //                 "name": "heat",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1678989214881980418",
        //                 "name": "testtest",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1678309122652545026",
        //                 "name": "数据",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1676845652912414721",
        //                 "name": "k",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1676803135038857217",
        //                 "name": "text",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1676152665597321218",
        //                 "name": "医药",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1674293863663050753",
        //                 "name": "车间大屏",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1673592290142101506",
        //                 "name": "123123",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1673575759765086210",
        //                 "name": "云开发",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1672884101046116353",
        //                 "name": "12q22",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1670991804167659521",
        //                 "name": "all",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1670714190945361922",
        //                 "name": "智慧社区",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1670358199070400514",
        //                 "name": "eco",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1670357493965955073",
        //                 "name": "宏观经济",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1669200051580215298",
        //                 "name": "net",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1668459890894479362",
        //                 "name": "地球大屏",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1668052054712557570",
        //                 "name": "demo123",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1664603864004861953",
        //                 "name": "sdsd",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1664556313281077249",
        //                 "name": "老莫的鱼",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1663020050333884417",
        //                 "name": "金融",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1662089426991374338",
        //                 "name": "www",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1661916568969293825",
        //                 "name": "2032",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1660157725415321601",
        //                 "name": "数字",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1659974930038534145",
        //                 "name": "计算机",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1659462735043244034",
        //                 "name": "student",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1658117116055822337",
        //                 "name": "111",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1656565093296545794",
        //                 "name": "旅游",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1655865080413200386",
        //                 "name": "大声道",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1655587463768350722",
        //                 "name": "水",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1655389908367351810",
        //                 "name": "1333",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1654747808051273730",
        //                 "name": "其他",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1654743424164732929",
        //                 "name": "AAA",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1654666703608520706",
        //                 "name": "0506",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1654020243758030849",
        //                 "name": "智能制造",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1651840160750411777",
        //                 "name": "wer",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1651812170565984258",
        //                 "name": "rest",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1651472296415633409",
        //                 "name": "demo",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1649762146415845378",
        //                 "name": "abc",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1649725744764461058",
        //                 "name": "esm",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1649230794599735298",
        //                 "name": "前端",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1648234450628157442",
        //                 "name": "车联网",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1648124864617291778",
        //                 "name": "钢铁",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1647276669716701185",
        //                 "name": "啦啦啦啦",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1646709682913452034",
        //                 "name": "数字化",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1646475971664060417",
        //                 "name": "集成电路",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1646030004292722689",
        //                 "name": "飒飒",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1645814528727883778",
        //                 "name": "test",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1645428055457439746",
        //                 "name": "E-commerce",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1645307810851889153",
        //                 "name": "kee",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1645250163867951106",
        //                 "name": "qq",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1642866721884774402",
        //                 "name": "制造业",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1642533722181902337",
        //                 "name": "物联网",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1641986193610547202",
        //                 "name": "智慧城市",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1640275232579178497",
        //                 "name": "1111",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1640198112817500162",
        //                 "name": "cj222",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1638724042997420034",
        //                 "name": "互联网",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1638425629756018690",
        //                 "name": "AAAAA",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1637348589938159618",
        //                 "name": "娱乐",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1637285974792744962",
        //                 "name": "teststest",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1636553697787916289",
        //                 "name": "yyj",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1636273573507117057",
        //                 "name": "IT服务",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1636264700847075329",
        //                 "name": "交通",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1634553713412550658",
        //                 "name": "电力",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1634402077734088705",
        //                 "name": "IT",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1634182512399888386",
        //                 "name": "教育",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1634100506412462082",
        //                 "name": "332",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1633648781180284929",
        //                 "name": "666666",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1633511181178122241",
        //                 "name": "11111",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1633303627537854465",
        //                 "name": "fffff",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1633016366866903042",
        //                 "name": "it",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1632637067185893377",
        //                 "name": "12",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1631505649160433665",
        //                 "name": "农业",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1631243804256251906",
        //                 "name": "CE ",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1631201845047209985",
        //                 "name": "ceshi",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1631119621308297217",
        //                 "name": "xinxi",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1630811890500251650",
        //                 "name": "商贸",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1630521584651350017",
        //                 "name": "数据分析企业",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1630416392572383233",
        //                 "name": " 制造",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1630025613697888257",
        //                 "name": "1234",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1629532556833599489",
        //                 "name": "database",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1629104691394654209",
        //                 "name": "1",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1628753407663681537",
        //                 "name": "123",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1628588000780759042",
        //                 "name": "运输",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1628238967679758338",
        //                 "name": "传统企业",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1627859655512305666",
        //                 "name": "航空",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1627482226453131266",
        //                 "name": "应急",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1627272760000524289",
        //                 "name": "ddd",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1626840386217455618",
        //                 "name": "统计",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1626520056278036482",
        //                 "name": "xxxx",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1626510308921061378",
        //                 "name": "医美",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1626495349394780161",
        //                 "name": "供应链",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1626490463387136001",
        //                 "name": "6554",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1626478360068632577",
        //                 "name": "测试",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1625784833185689601",
        //                 "name": "徐州鼓楼区",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1625427012279611393",
        //                 "name": "餐饮",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1625068563721105409",
        //                 "name": "52",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1625059619606900738",
        //                 "name": "电信",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1624370365901844482",
        //                 "name": "1111111",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1624236578035478530",
        //                 "name": "测试111",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1624014380007960577",
        //                 "name": "建筑",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1623941055474839554",
        //                 "name": "行业",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1623929730212311041",
        //                 "name": "医疗",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1623887058885947394",
        //                 "name": "虽说是",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1623690780667293698",
        //                 "name": "424242 ",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1623209943169511425",
        //                 "name": "11",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1623154295090196481",
        //                 "name": "dfd",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1622847552174960641",
        //                 "name": "卖鱼当",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1622555745063022594",
        //                 "name": "tag",
        //                 "projectId": null
        //             },
        //             {
        //                 "id": "1564144977514147842",
        //                 "name": "全行业",
        //                 "projectId": null
        //             }
        //         ]
        //     }
        // }
    }
}

import {Body, Controller, Get, Inject, Post, Query} from '@nestjs/common';
import {UserService} from "./user.service";
import {definedError} from "../../utils/definedError";
import { Id } from 'src/utils/util';

@Controller('users')
export class UserController {

    @Inject()
    private readonly userService: UserService

    @Post('login')
    async login (@Body() body: any) {
        let { username, password } = body
        const nameInfo = await this.userService.getName(username)
        if (nameInfo?.password !== password) {
            return definedError('用户名或密码错误')
        }
        if (nameInfo?.status && nameInfo?.status === 'invalid') {
            return definedError('用户状态已禁用')
        }
        const roleInfo = await this.userService.getRoleInfo(nameInfo?.roleId)
        if (roleInfo?.status !== 'valid') {
            return definedError('无角色分配，无权限')
        }
        // 分配jwt-token放到cookie
        return {
            id: nameInfo?.id
        }
    }

    @Post('register')
    async register(@Body() body: any) {
        let { username, password, phone, email } = body
        // 查询注册用户是否存在
        const nameInfo = await this.userService.getName(username)
        console.log(nameInfo, '##@@@@@@@@@@')
        if (nameInfo?.userName === username) {
            return definedError('用户名重复，请重新注册')
        }
        // 获取角色信息
        const role = await this.userService.getRole('成员')
        const obj = {
            id: Id,
            userName: username,
            email,
            phone,
            password,
            roleId: role.id ?? 2,
            status: role.status ?? 'valid',
            isDouc: 0
        }
        await this.userService.saveUser(obj)
        return '用户注册成功'
    }

    @Get('info')
    async info(@Query() { id }) {
        try {
            let ids = await this.userService.getById(id)
            console.log(ids, '@@@@@@')
            if (ids?.id === null) {
                return definedError('当前用户未查到')
            }
            const roles = await this.userService.getRoleId(ids?.roleId)
            if (roles?.name === '管理员') {
                ids['isAdmin'] = true
            } else {
                ids['isAdmin'] = false
            }
            console.log(roles, '@@@@@@@@@@@@@@@@!!1111111111')
            ids['isDouc'] = !!ids?.isDouc
            ids['menus'] = roles?.menus && JSON.parse(roles?.menus).menus
            ids['username'] = ids['userName']
            return ids
        } catch (e) {
            throw new Error('查询用户异常:' + e)
        }
    }
}

import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Role, User} from "../../entities";
import {Repository} from "typeorm";
import {definedError} from "../../utils/definedError";

@Injectable()
export class UserService {

    @InjectRepository(User, 'cw_lcap')
    private readonly userRep!: Repository<User>

    @InjectRepository(Role, 'cw_lcap')
    private readonly roleRep!: Repository<Role>

    async getName(username: any) {
        const res = await this.userRep.findOne({
            where: {
                userName: username
            },
            select: ["id", "userName", "password", "status", "roleId"]
        })
        return res
    }

    async getRole(role: string) {
        const res = await this.roleRep.findOne({
            where: {
                name: role
            },
            select: ["id", "status"]
        })
        return res
    }

    async saveUser(obj: any) {
        try {
            await this.userRep.save(obj)
        } catch (e) {
            throw new Error('保存用户信息异常')
            // definedError('保存用户信息异常')
        }
    }

    async getRoleInfo(roleId: any) {
        return await this.roleRep.findOne({
            where: {
                id: roleId
            },
            select: ["id", "status"]
        })
    }

    async getById(id: any) {
        return await this.userRep.findOne({
            where: {
                id
            }
        })
    }

    async getRoleId(roleId: string) {
        return await this.roleRep.findOne({
            where: {
                id: roleId
            },
            select: ['name', 'desc', 'menus']
        })
    }
}

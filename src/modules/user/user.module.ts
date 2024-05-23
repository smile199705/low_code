import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Role, User} from "../../entities";

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role], 'cw_lcap')
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}

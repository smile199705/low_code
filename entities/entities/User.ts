import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user", { schema: "cw_lcap" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "id" })
  id: string;

  @Column("varchar", {
    name: "user_name",
    nullable: true,
    comment: "用户名",
    length: 100,
  })
  userName: string | null;

  @Column("varchar", {
    name: "email",
    nullable: true,
    comment: "邮箱",
    length: 32,
  })
  email: string | null;

  @Column("varchar", {
    name: "phone",
    nullable: true,
    comment: "电话",
    length: 11,
  })
  phone: string | null;

  @Column("varchar", {
    name: "password",
    nullable: true,
    comment: "密码",
    length: 100,
  })
  password: string | null;

  @Column("varchar", {
    name: "role_id",
    nullable: true,
    comment: "角色id",
    length: 255,
  })
  roleId: string | null;

  @Column("varchar", {
    name: "status",
    nullable: true,
    comment: "是否非法，是否禁用",
    length: 20,
  })
  status: string | null;

  @Column("tinyint", {
    name: "is_douc",
    nullable: true,
    comment: "是否是douc用户",
    width: 1,
  })
  isDouc: boolean | null;

  @Column("bigint", { name: "updater", nullable: true, comment: "更新人" })
  updater: string | null;

  @Column("bigint", { name: "creator", nullable: true, comment: "创建人" })
  creator: string | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date | null;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    comment: "更新时间",
    default: () => "CURRENT_TIMESTAMP",
  })
  updateTime: Date | null;
}

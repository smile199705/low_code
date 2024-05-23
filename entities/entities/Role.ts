import { BaseEntity, Column, Entity } from "typeorm";

@Entity("role", { schema: "cw_lcap" })
export class Role extends BaseEntity {
  @Column("varchar", { primary: true, name: "id", comment: "id", length: 255 })
  id: string;

  @Column("varchar", {
    name: "status",
    nullable: true,
    comment: "是否合法",
    length: 10,
  })
  status: string | null;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "角色名",
    length: 100,
  })
  name: string | null;

  @Column("text", { name: "desc", nullable: true, comment: "描述" })
  desc: string | null;

  @Column("text", { name: "menus", nullable: true, comment: "菜单对象MenuVo" })
  menus: string | null;

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

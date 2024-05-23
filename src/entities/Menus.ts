import { BaseEntity, Column, Entity } from "typeorm";

@Entity("menus", { schema: "cw_lcap" })
export class Menus extends BaseEntity {
  @Column("varchar", { primary: true, name: "id", comment: "id", length: 255 })
  id: string;

  @Column("int", { name: "parent_menu_id", nullable: true, comment: "父id" })
  parentMenuId: number | null;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "菜单名称",
    length: 100,
  })
  name: string | null;

  @Column("varchar", {
    name: "url",
    nullable: true,
    comment: "菜单url",
    length: 100,
  })
  url: string | null;

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

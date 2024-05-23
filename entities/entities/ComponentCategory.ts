import { BaseEntity, Column, Entity } from "typeorm";

@Entity("component_category", { schema: "cw_lcap" })
export class ComponentCategory extends BaseEntity {
  @Column("varchar", { primary: true, name: "id", length: 255 })
  id: string;

  @Column("bigint", { name: "account_id", nullable: true })
  accountId: string | null;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "icon", nullable: true, length: 100 })
  icon: string | null;

  @Column("varchar", {
    name: "parent_id",
    nullable: true,
    comment: "顶级分类 parent_id=-1",
    length: 30,
  })
  parentId: string | null;

  @Column("varchar", { name: "init_from", nullable: true, length: 100 })
  initFrom: string | null;

  @Column("tinyint", {
    name: "deleted",
    comment: "0未删除 1已删除",
    default: () => "'0'",
  })
  deleted: number;

  @Column("bigint", { name: "creator", nullable: true })
  creator: string | null;

  @Column("bigint", { name: "updater", nullable: true })
  updater: string | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date | null;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updateTime: Date | null;
}

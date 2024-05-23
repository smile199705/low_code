import { BaseEntity, Column, Entity } from "typeorm";

@Entity("trade", { schema: "cw_lcap" })
export class Trade extends BaseEntity {
  @Column("varchar", { primary: true, name: "id", length: 255 })
  id: string;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "desc", nullable: true, length: 255 })
  desc: string | null;

  @Column("varchar", { name: "init_from", nullable: true, length: 100 })
  initFrom: string | null;

  @Column("tinyint", {
    name: "deleted",
    comment: "0未删除1已删除",
    default: () => "'0'",
  })
  deleted: number;

  @Column("bigint", { name: "account_id", nullable: true })
  accountId: string | null;

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

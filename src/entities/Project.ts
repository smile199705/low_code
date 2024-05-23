import {BaseEntity, Column, Entity, OneToMany} from "typeorm";

@Entity("project", { schema: "cw_lcap" })
export class Project extends BaseEntity {

  @Column("varchar", { primary: true, name: "id", length: 225 })
  id: string;

  @Column("varchar", { name: "name", length: 100 })
  name: string;

  @Column("text", { name: "desc", nullable: true })
  desc: string | null;

  @Column("varchar", { name: "init_from", nullable: true, length: 100 })
  initFrom: string | null;

  @Column("bigint", { name: "account_id", nullable: true })
  accountId: string | null;

  @Column("tinyint", {
    name: "deleted",
    comment: "0未删除1已删除",
    default: () => "'0'",
  })
  deleted: number;

  @Column("bigint", { name: "creator", nullable: true })
  creator: string | null;

  @Column("bigint", { name: "updater", nullable: true })
  updater: string | null;

  @Column("datetime", {
    name: "create_time",
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date;

  @Column("datetime", {
    name: "update_time",
    default: () => "CURRENT_TIMESTAMP",
  })
  updateTime: Date;
}

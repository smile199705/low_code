import { BaseEntity, Column, Entity } from "typeorm";

@Entity("data_table", { schema: "cw_lcap" })
export class DataTable extends BaseEntity {
  @Column("varchar", { primary: true, name: "id", length: 255 })
  id: string;

  @Column("varchar", { name: "data_source_id", nullable: true, length: 255 })
  dataSourceId: string | null;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("text", { name: "meta" })
  meta: string;

  @Column("bigint", { name: "account_id", nullable: true })
  accountId: string | null;

  @Column("bigint", { name: "creator", nullable: true })
  creator: string | null;

  @Column("bigint", { name: "updater", nullable: true })
  updater: string | null;

  @Column("tinyint", { name: "deleted", nullable: true })
  deleted: number | null;

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

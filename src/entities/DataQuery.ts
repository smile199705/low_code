import { BaseEntity, Column, Entity } from "typeorm";

@Entity("data_query", { schema: "cw_lcap" })
export class DataQuery extends BaseEntity {
  @Column("varchar", { primary: true, name: "id", length: 255 })
  id: string;

  @Column("varchar", { name: "data_source_id", nullable: true, length: 255 })
  dataSourceId: string | null;

  @Column("varchar", { name: "table_id", nullable: true, length: 255 })
  tableId: string | null;

  @Column("varchar", { name: "query_name", length: 255 })
  queryName: string;

  @Column("tinyint", { name: "query_type" })
  queryType: number;

  @Column("text", { name: "setting", nullable: true })
  setting: string | null;

  @Column("text", { name: "sql", nullable: true })
  sql: string | null;

  @Column("bigint", { name: "account_id", nullable: true })
  accountId: string | null;

  @Column("tinyint", { name: "deleted", default: () => "'0'" })
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

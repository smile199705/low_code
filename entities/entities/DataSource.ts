import { BaseEntity, Column, Entity } from "typeorm";

@Entity("data_source", { schema: "cw_lcap" })
export class DataSource extends BaseEntity {
  @Column("varchar", { primary: true, name: "id", length: 255 })
  id: string;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "schema_type", length: 255 })
  schemaType: string;

  @Column("varchar", { name: "schema_name", length: 255 })
  schemaName: string;

  @Column("text", { name: "connect_data", nullable: true })
  connectData: string | null;

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

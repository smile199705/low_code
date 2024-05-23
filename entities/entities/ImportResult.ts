import { BaseEntity, Column, Entity } from "typeorm";

@Entity("import_result", { schema: "cw_lcap" })
export class ImportResult extends BaseEntity {
  @Column("varchar", { primary: true, name: "id", length: 100 })
  id: string;

  @Column("varchar", { name: "key", length: 100 })
  key: string;

  @Column("varchar", { name: "type", nullable: true, length: 100 })
  type: string | null;

  @Column("tinyint", { name: "status", nullable: true })
  status: number | null;

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

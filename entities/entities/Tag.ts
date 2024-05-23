import { BaseEntity, Column, Entity } from "typeorm";

@Entity("tag", { schema: "cw_lcap" })
export class Tag extends BaseEntity {
  @Column("varchar", { primary: true, name: "id", length: 255 })
  id: string;

  @Column("bigint", { name: "account_id", nullable: true })
  accountId: string | null;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "type", nullable: true, length: 255 })
  type: string | null;

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

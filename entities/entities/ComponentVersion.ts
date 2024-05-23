import { BaseEntity, Column, Entity } from "typeorm";

@Entity("component_version", { schema: "cw_lcap" })
export class ComponentVersion extends BaseEntity {
  @Column("varchar", { primary: true, name: "id", length: 255 })
  id: string;

  @Column("varchar", { name: "component_id", length: 255 })
  componentId: string;

  @Column("varchar", { name: "no", length: 255 })
  no: string;

  @Column("varchar", { name: "status", nullable: true, length: 100 })
  status: string | null;

  @Column("varchar", { name: "desc", nullable: true, length: 255 })
  desc: string | null;

  @Column("bigint", { name: "creator", nullable: true })
  creator: string | null;

  @Column("bigint", { name: "updater", nullable: true })
  updater: string | null;

  @Column("tinyint", { name: "deleted", default: () => "'0'" })
  deleted: number;

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

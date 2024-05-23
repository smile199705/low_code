import { BaseEntity, Column, Entity } from "typeorm";

@Entity("app_var", { schema: "cw_lcap" })
export class AppVar extends BaseEntity {
  @Column("varchar", { primary: true, name: "id", length: 255 })
  id: string;

  @Column("varchar", { name: "type", nullable: true, length: 10 })
  type: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 100 })
  name: string | null;

  @Column("varchar", { name: "intro", nullable: true, length: 100 })
  intro: string | null;

  @Column("varchar", { name: "app_id", nullable: true, length: 100 })
  appId: string | null;

  @Column("varchar", { name: "scope", nullable: true, length: 10 })
  scope: string | null;

  @Column("varchar", { name: "page_id", nullable: true, length: 100 })
  pageId: string | null;

  @Column("varchar", { name: "value_type", nullable: true, length: 10 })
  valueType: string | null;

  @Column("text", { name: "default_value", nullable: true })
  defaultValue: string | null;

  @Column("varchar", { name: "path", nullable: true, length: 100 })
  path: string | null;

  @Column("tinyint", { name: "deleted", nullable: true, default: () => "'0'" })
  deleted: number | null;

  @Column("datetime", { name: "create_time", nullable: true })
  createTime: Date | null;

  @Column("datetime", { name: "update_time", nullable: true })
  updateTime: Date | null;
}

import { BaseEntity, Column, Entity } from "typeorm";

@Entity("component_group_category", { schema: "cw_lcap" })
export class ComponentGroupCategory extends BaseEntity {
  @Column("varchar", { primary: true, name: "id", length: 255 })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "parent_id", nullable: true, length: 255 })
  parentId: string | null;

  @Column("datetime", { name: "create_time", nullable: true })
  createTime: Date | null;

  @Column("datetime", { name: "update_time", nullable: true })
  updateTime: Date | null;

  @Column("tinyint", { name: "deleted", nullable: true, width: 1 })
  deleted: boolean | null;
}

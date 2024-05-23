import { BaseEntity, Column, Entity } from "typeorm";

@Entity("component_group", { schema: "cw_lcap" })
export class ComponentGroup extends BaseEntity {
  @Column("varchar", { primary: true, name: "id", length: 255 })
  id: string;

  @Column("longtext", { name: "info", nullable: true })
  info: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", { name: "cover", nullable: true, length: 255 })
  cover: string | null;

  @Column("varchar", { name: "category_first_id", nullable: true, length: 255 })
  categoryFirstId: string | null;

  @Column("varchar", {
    name: "category_second_id",
    nullable: true,
    length: 255,
  })
  categorySecondId: string | null;

  @Column("datetime", { name: "create_time", nullable: true })
  createTime: Date | null;

  @Column("datetime", { name: "update_time", nullable: true })
  updateTime: Date | null;

  @Column("tinyint", { name: "deleted", nullable: true, width: 1 })
  deleted: boolean | null;
}

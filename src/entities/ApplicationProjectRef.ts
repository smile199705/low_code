import { BaseEntity, Column, Entity } from "typeorm";

@Entity("application_project_ref", { schema: "cw_lcap" })
export class ApplicationProjectRef extends BaseEntity {
  @Column("varchar", { primary: true, name: "id", length: 255 })
  id: string;

  @Column("varchar", { name: "application_id", length: 255 })
  applicationId: string;

  @Column("varchar", { name: "project_id", length: 255 })
  projectId: string;

  @Column("tinyint", {
    name: "deleted",
    comment: "0未删除 1已删除",
    default: () => "'0'",
  })
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

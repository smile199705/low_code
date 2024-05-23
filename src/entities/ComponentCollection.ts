import { BaseEntity, Column, Entity } from "typeorm";

@Entity("component_collection", { schema: "cw_lcap" })
export class ComponentCollection extends BaseEntity {
  @Column("varchar", { name: "id", comment: "收藏id", length: 255 })
  id: string;

  @Column("varchar", { name: "component_id", comment: "组件id", length: 30 })
  componentId: string;

  @Column("bigint", { name: "account_id", nullable: true, comment: "租户id" })
  accountId: string | null;

  @Column("bigint", { name: "creator", nullable: true, comment: "创建者id" })
  creator: string | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date | null;
}

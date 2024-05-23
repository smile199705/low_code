import {BaseEntity, Column, Entity, ManyToMany, OneToMany} from "typeorm";

@Entity("project_trade_ref", { schema: "cw_lcap" })
export class ProjectTradeRef extends BaseEntity {
  @Column("varchar", { primary: true, name: "id", length: 255 })
  id: string;

  @Column("varchar", { name: "project_id", length: 100 })
  projectId: string;

  @Column("varchar", { name: "trade_id", length: 100 })
  tradeId: string;

  @Column("tinyint", { name: "deleted", nullable: true, default: () => "'0'" })
  deleted: number | null;

  @Column("datetime", {
    name: "create_time",
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date;

  @Column("datetime", {
    name: "update_time",
    default: () => "CURRENT_TIMESTAMP",
  })
  updateTime: Date;
}

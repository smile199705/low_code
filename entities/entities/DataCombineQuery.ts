import { BaseEntity, Column, Entity } from "typeorm";

@Entity("data_combine_query", { schema: "cw_lcap" })
export class DataCombineQuery extends BaseEntity {
  @Column("varchar", { primary: true, name: "id", length: 100 })
  id: string;

  @Column("varchar", { name: "combine_query_id", length: 100 })
  combineQueryId: string;

  @Column("varchar", { name: "ref_query_id", length: 100 })
  refQueryId: string;

  @Column("bigint", { name: "deleted", default: () => "'0'" })
  deleted: string;

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

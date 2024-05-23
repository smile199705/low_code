import { BaseEntity, Column, Entity } from "typeorm";

@Entity("account", { schema: "cw_lcap" })
export class Account extends BaseEntity {
  @Column("varchar", { primary: true, name: "id", length: 255 })
  id: string;

  @Column("varchar", { name: "name", length: 100 })
  name: string;

  @Column("varchar", { name: "type", length: 100 })
  type: string;

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

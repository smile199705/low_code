import { BaseEntity, Column, Entity } from "typeorm";

@Entity("application", { schema: "cw_lcap" })
export class Application extends BaseEntity {
  @Column("varchar", { primary: true, name: "id", length: 255 })
  id: string;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", {
    name: "develop_status",
    nullable: true,
    length: 255,
    default: () => "'doing'",
  })
  developStatus: string | null;

  @Column("varchar", { name: "type", length: 100 })
  type: string;

  @Column("varchar", { name: "cover", nullable: true, length: 255 })
  cover: string | null;

  @Column("longtext", { name: "pages", nullable: true })
  pages: string | null;

  @Column("varchar", { name: "init_from", nullable: true, length: 255 })
  initFrom: string | null;

  @Column("tinyint", {
    name: "is_lib",
    comment: "是否属于模版库 0-否 1-属于",
    default: () => "'0'",
  })
  isLib: number;

  @Column("tinyint", {
    name: "is_recommend",
    comment: "是否推荐至工作台",
    default: () => "'0'",
  })
  isRecommend: number;

  @Column("int", { name: "invalid", default: () => "'0'" })
  invalid: number;

  @Column("varchar", { name: "project_id", length: 255 })
  projectId: string;

  @Column("bigint", { name: "account_id", nullable: true })
  accountId: string | null;

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

  @Column("text", { name: "models", nullable: true })
  models: string | null;

  @Column("varchar", { name: "model_id", nullable: true, length: 255 })
  modelId: string | null;
}

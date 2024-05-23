import { BaseEntity, Column, Entity } from "typeorm";

@Entity("component", { schema: "cw_lcap" })
export class Component extends BaseEntity {
  @Column("varchar", { primary: true, name: "id", length: 255 })
  id: string;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("tinyint", {
    name: "is_lib",
    comment: "0:非组件库组件 1:组件库组件",
    default: () => "'0'",
  })
  isLib: number;

  @Column("text", { name: "icon", nullable: true })
  icon: string | null;

  @Column("varchar", { name: "init_from", nullable: true, length: 100 })
  initFrom: string | null;

  @Column("varchar", { name: "category_id", nullable: true, length: 255 })
  categoryId: string | null;

  @Column("varchar", { name: "sub_category_id", nullable: true, length: 255 })
  subCategoryId: string | null;

  @Column("text", { name: "desc", nullable: true })
  desc: string | null;

  @Column("varchar", {
    name: "cover",
    nullable: true,
    comment: "预览图地址",
    length: 255,
  })
  cover: string | null;

  @Column("varchar", {
    name: "automatic_cover",
    comment: "组件背景图生成方式 custom:手动上传（auto:自动生成方式已废弃）",
    length: 100,
    default: () => "'custom'",
  })
  automaticCover: string;

  @Column("tinyint", {
    name: "allow_data_search",
    nullable: true,
    default: () => "'0'",
  })
  allowDataSearch: number | null;

  @Column("varchar", {
    name: "develop_status",
    nullable: true,
    comment: "组件开发状态",
    length: 255,
    default: () => "'doing'",
  })
  developStatus: string | null;

  @Column("bigint", { name: "account_id", nullable: true })
  accountId: string | null;

  @Column("tinyint", {
    name: "deleted",
    comment: "0未删除1已删除",
    default: () => "'0'",
  })
  deleted: number;

  @Column("bigint", { name: "creator", nullable: true })
  creator: string | null;

  @Column("bigint", { name: "updater", nullable: true })
  updater: string | null;

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

  @Column("varchar", {
    name: "type",
    nullable: true,
    comment: "project: 项目组件,common:基础组件",
    length: 100,
  })
  type: string | null;

  @Column("text", { name: "data_config", nullable: true })
  dataConfig: string | null;

  @Column("varchar", {
    name: "latest_version",
    nullable: true,
    comment: "组件最新版本号",
    length: 100,
    default: () => "'v-current'",
  })
  latestVersion: string | null;
}

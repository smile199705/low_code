/* eslint-disable camelcase */
import { PrimaryGeneratedColumn, Column } from 'typeorm'


export class BaseEntity {

    // @PrimaryGeneratedColumn({ type: 'bigint' })
    // id!: number
    //
    // @Column({
    //     type: 'timestamp',
    //     nullable: false,
    //     default: () => 'CURRENT_TIMESTAMP'
    // })
    // createdAt!: Date
    //
    // @Column({ type: 'timestamp', nullable: true, onUpdate: 'CURRENT_TIMESTAMP' })
    // updatedAt!: Date
}

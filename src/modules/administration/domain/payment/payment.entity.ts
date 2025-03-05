import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Tool } from '../tool/tool.entity';

@Entity('payment')
export class Payment {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_payment: number;

  @Column()
  @AutoMap()
  sub_total: number;

  @Column()
  @AutoMap()
  taxes: number;

  @Column()
  @AutoMap()
  shipping: number;

  @Column()
  @AutoMap()
  total: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @AutoMap()
  dateOfPayment: Date;

  @Column()
  @AutoMap()
  order_number: string;

  @ManyToOne(() => Tool, (tool) => tool.payments, { nullable: false })
  @JoinColumn({ name: 'id_tool' })
  @AutoMap()
  tool: Tool;

  @Column({ type: 'boolean', default: true })
  @AutoMap()
  state: boolean;

  @CreateDateColumn()
  @AutoMap()
  created_at: Date;

  @UpdateDateColumn()
  @AutoMap()
  updated_at: Date;
}

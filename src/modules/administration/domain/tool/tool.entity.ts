import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Payment } from '../payment/payment.entity';
import { User } from '../user/user.entity';

@Entity({ name: 'tools' })
export class Tool {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;

  @AutoMap()
  @Column({ length: 255 })
  name: string;

  @AutoMap()
  @Column({ length: 1 })
  type: string;

  @AutoMap()
  @Column({ length: 50, unique: true })
  code: string;

  @AutoMap()
  @Column({ type: 'text', nullable: true })
  description?: string;

  @OneToMany(() => Payment, (payment) => payment.tool)
  payments: Payment[];

  // Relación con User corregida
  @OneToMany(() => User, (user) => user.tool)
  users: User[];

  @Column({ type: 'boolean', default: false })
  @AutoMap()
  state: boolean;

  @CreateDateColumn()
  @AutoMap()
  created_at: Date;

  @UpdateDateColumn()
  @AutoMap()
  updated_at: Date;
}

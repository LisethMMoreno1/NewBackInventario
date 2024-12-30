import { AutoMap } from '@automapper/classes';
import { Payment } from 'src/modules/administration/domain/payment/payment.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
/* import { Payment } from '../payments/payments.entity';
 *//* import { Payment } from '../../../Payment/entities/payment.entity';
 */
@Entity({ schema: 'Mantenimiento', name: 'banks' })
export class Bank {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id_bank: number;

  @Column()
  @AutoMap()
  code_bank: number;

  @Column()
  @AutoMap()
  name_bank: string;

  @Column({ type: 'boolean', default: false })
  @AutoMap()
  state: boolean;

  @CreateDateColumn()
  @AutoMap()
  created_at: Date;

  @UpdateDateColumn()
  @AutoMap()
  updated_at: Date;

  @OneToMany(() => Payment, (payment) => payment.bank)
  @AutoMap()
  payments: Payment[];
}

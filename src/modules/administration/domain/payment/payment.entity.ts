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
import { Order } from '../orders/orders.entity';
import { Customers } from '../customers/customers.entity';
import { Bank } from 'src/modules/maintenance/domain/bank/bank.entity';

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

  @ManyToOne(() => Order, (order) => order.payments, { nullable: false })
  @JoinColumn({ name: 'id_order' })
  @AutoMap()
  order: Order;

  @ManyToOne(() => Customers, (customer) => customer.payments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_customer' })
  customer: Customers;

  @ManyToOne(() => Bank, (bank) => bank.payments, { nullable: false })
  @JoinColumn({ name: 'id_bank' })
  @AutoMap()
  bank: Bank;

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

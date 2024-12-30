import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Payment } from '../payment/payment.entity';
import { OrderStatus } from '../orderStatus/orderStatus.entity';
import { OrderDetails } from '../orderDetails/orderDetails.entity';
import { Customers } from '../customers/customers.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_order: number;

  @Column({ nullable: false, type: 'varchar', length: 20 })
  @AutoMap()
  order_number: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @AutoMap()
  date_entry: Date;

  @ManyToOne(() => Customers, (customer) => customer.orders, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_customers' })
  customer: Customers;

  @OneToOne(() => OrderDetails, { nullable: true })
  @JoinColumn()
  @AutoMap()
  orderDetails: OrderDetails;

  @ManyToOne(() => OrderStatus, (orderStatus) => orderStatus.orders, {
    nullable: true,
  })
  @JoinColumn({ name: 'id_orderStatus' })
  @AutoMap()
  orderStatus: OrderStatus;

  @OneToMany(() => Payment, (payment) => payment.order)
  @AutoMap()
  payments: Payment[];

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

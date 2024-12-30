import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderStatus } from '../orderStatus/orderStatus.entity';
import { Order } from '../orders/orders.entity';

@Entity({ name: 'OrderDetails' })
export class OrderDetails {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_orderDetails: number;

  @Column({ type: 'varchar', length: 100 })
  @AutoMap()
  brand: string;

  @Column({ type: 'int' })
  @AutoMap()
  yearOfManufacture: number;

  @Column({ type: 'varchar', length: 20 })
  @AutoMap()
  plate_number: string;

  @Column({ type: 'text' })
  @AutoMap()
  description_problem: string;

  @CreateDateColumn()
  @AutoMap()
  dateOfEntry: Date;

  @OneToOne(() => Order, (order) => order.orderDetails)
  @AutoMap()
  @JoinColumn({ name: 'id_order' })
  order: Order;

  @ManyToOne(() => OrderStatus, (orderStatus) => orderStatus.orderDetails)
  @JoinColumn({ name: 'id_orderStatus' })
  orderStatus: OrderStatus;

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

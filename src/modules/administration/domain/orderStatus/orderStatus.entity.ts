import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderDetails } from '../orderDetails/orderDetails.entity';
import { Order } from '../orders/orders.entity';

@Entity({ name: 'OrderStatus' })
export class OrderStatus {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id_orderStatus: number;

  @Column({ unique: true })
  @AutoMap()
  order_status: string;

  @Column()
  @AutoMap()
  description: string;

  @OneToMany(() => OrderDetails, (orderDetails) => orderDetails.orderStatus)
  @AutoMap()
  orderDetails: OrderDetails[];

  @OneToMany(() => Order, (order) => order.orderStatus)
  @AutoMap()
  orders: Order[];

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

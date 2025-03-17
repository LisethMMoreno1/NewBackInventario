import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { VehicleReceptionRecord } from '../vehicleReceptionRecord/vehicleReceptionRecord.entity';
import { AutoMap } from '@automapper/classes';
import { Order } from '../order/order.entity';

@Entity({ name: 'vehicle_delivery_records' })
export class VehicleDeliveryRecord {
  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;

  @AutoMap()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  deliveryDate: Date;

  @AutoMap()
  @Column({ type: 'text' })
  completedRepairs: string;

  @AutoMap()
  @Column({ type: 'boolean', default: false })
  customerSatisfaction: boolean;

  @AutoMap()
  @OneToOne(
    () => VehicleReceptionRecord,
    (reception) => reception.deliveryRecord,
  )
  receptionRecord: VehicleReceptionRecord;

  @OneToMany(() => Order, (order) => order.deliveryRecord)
  orders: Order[];

  @AutoMap()
  @CreateDateColumn()
  createdAt: Date;

  @AutoMap()
  @UpdateDateColumn()
  updatedAt: Date;
}

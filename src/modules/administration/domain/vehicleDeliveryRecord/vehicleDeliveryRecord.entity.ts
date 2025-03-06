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

  // Date when the vehicle is delivered.
  @AutoMap()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  deliveryDate: Date;

  // Summary of the completed repairs and tests.
  @AutoMap()
  @Column({ type: 'text' })
  completedRepairs: string;

  // Indicates if the customer has confirmed satisfaction with the delivery.
  @AutoMap()
  @Column({ type: 'boolean', default: false })
  customerSatisfaction: boolean;

  // Inverse side of the one-to-one relationship with the reception record.
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

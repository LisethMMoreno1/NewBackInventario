import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';
import { VehicleReceptionRecord } from '../vehicleReceptionRecord/vehicleReceptionRecord.entity';

@Entity({ name: 'vehicle_delivery_records' })
export class VehicleDeliveryRecord {
  @PrimaryGeneratedColumn()
  id: number;

  // Date when the vehicle is delivered.
  @Column({ type: 'timestamp' })
  deliveryDate: Date;

  // Summary of the completed repairs and tests.
  @Column({ type: 'text' })
  completedRepairs: string;

  // Indicates if the customer has confirmed satisfaction with the delivery.
  @Column({ type: 'boolean', default: false })
  customerSatisfaction: boolean;

  // Inverse side of the one-to-one relationship with the reception record.
  @OneToOne(
    () => VehicleReceptionRecord,
    (reception) => reception.deliveryRecord,
  )
  receptionRecord: VehicleReceptionRecord;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

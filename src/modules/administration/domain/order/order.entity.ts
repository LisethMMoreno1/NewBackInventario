import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { VehicleReceptionRecord } from '../vehicleReceptionRecord/vehicleReceptionRecord.entity';
import { VehicleDeliveryRecord } from '../vehicleDeliveryRecord/vehicleDeliveryRecord.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @AutoMap()
  orderNumber: string;

  @CreateDateColumn()
  @AutoMap()
  createdAt: Date;

  @Column({ default: 'Activo' })
  @AutoMap()
  status: string; // 'Activo' | 'Completa'

  @ManyToOne(() => VehicleReceptionRecord, { nullable: false })
  @AutoMap()
  receptionRecord: VehicleReceptionRecord;

  @ManyToOne(() => VehicleDeliveryRecord, { nullable: true })
  @AutoMap()
  deliveryRecord: VehicleDeliveryRecord;

  @Column({ type: 'text', nullable: true })
  @AutoMap()
  workDetails: string;

  @Column({ type: 'decimal' })
  @AutoMap()
  cost: number;
}

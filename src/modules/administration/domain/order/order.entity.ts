import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { VehicleOwner } from '../vehicleOwner/vehicleOwner.entity';
import { VehicleReceptionRecord } from '../vehicleReceptionRecord/vehicleReceptionRecord.entity';
import { VehicleExitRecord } from '../vehicleExitRecord/vehicleExitRecord.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @AutoMap()
  orderNumber: string;


  @Column({ default: 'Activo' })
  @AutoMap()
  status: string; // 'Activo' | 'Completa'

  @ManyToOne(() => VehicleReceptionRecord, { nullable: false })
  @AutoMap()
  receptionRecord: VehicleReceptionRecord;


  @ManyToOne(() => VehicleOwner, (vehicleOwner) => vehicleOwner.orders, { nullable: true })
  @JoinColumn({ name: 'vehicleOwnerId' })
  vehicleOwner: VehicleOwner;

  @OneToMany(() => VehicleExitRecord, (exitRecord) => exitRecord.order)
  @AutoMap(() => VehicleExitRecord)
  exitRecords: VehicleExitRecord[];

  @Column({ type: 'text', nullable: true })
  @AutoMap()
  workDetails: string;

  @Column({ type: 'decimal' })
  @AutoMap()
  cost: number;

  @AutoMap()
  createdAt: Date;

  @AutoMap()
  updatedAt: Date;
}

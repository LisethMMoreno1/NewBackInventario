import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { VehicleReceptionRecord } from '../vehicleReceptionRecord/vehicleReceptionRecord.entity';
import { AutoMap } from '@automapper/classes';
import { Order } from '../order/order.entity';
import { VehicleExitRecord } from '../vehicleExitRecord/vehicleExitRecord.entity';

@Entity('vehicle_owners')
export class VehicleOwner {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column({ length: 100 })
  @AutoMap()
  fullName: string;

  @Column({ unique: true })
  @AutoMap()
  identificationNumber: number;

  @Column({ length: 20 })
  @AutoMap()
  phoneNumber: string;

  @Column({ length: 100, nullable: true })
  @AutoMap()
  email: string;

  @Column({ length: 200, nullable: true })
  @AutoMap()
  address: string;

  @Column({ length: 50 })
  @AutoMap()
  vehicleBrand: string;

  @Column({ length: 50 })
  @AutoMap()
  vehicleModel: string;

  @Column({ length: 20 })
  @AutoMap()
  licensePlate: string;

  @Column({ length: 20 })
  @AutoMap()
  vehicleColor: string;

  @Column({ type: 'boolean', default: false })
  @AutoMap()
  insuranceValid: boolean;

  @Column({ length: 500, nullable: true })
  @AutoMap()
  specialInstructions: string;

  @Column({ type: 'boolean', default: false })
  @AutoMap()
  authorizedForPickup: boolean;

  @OneToMany(() => Order, order => order.vehicleOwner)
  @AutoMap(() => Order)
  orders: Order[];

  @OneToMany(() => VehicleReceptionRecord, (record) => record.vehicleOwner)
  @AutoMap(() => VehicleReceptionRecord)
  receptionRecords: VehicleReceptionRecord[];

  @OneToMany(() => VehicleExitRecord, (exitRecord) => exitRecord.vehicleOwner)
  @AutoMap(() => VehicleExitRecord)
  exitRecords: VehicleExitRecord[]

  @CreateDateColumn()
  @AutoMap()
  createdAt: Date;

  @UpdateDateColumn()
  @AutoMap()
  updatedAt: Date;
}

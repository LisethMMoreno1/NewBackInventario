import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { VehicleReceptionRecord } from '../vehicleReceptionRecord/vehicleReceptionRecord.entity';
import { AutoMap } from '@automapper/classes';

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

  @OneToMany(() => VehicleReceptionRecord, (record) => record.vehicleOwner)
  @AutoMap()
  receptionRecords: VehicleReceptionRecord[];
}

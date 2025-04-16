import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Order } from '../order/order.entity';
import { VehicleOwner } from '../vehicleOwner/vehicleOwner.entity';

@Entity('vehicle_reception_records')
export class VehicleReceptionRecord {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column()
  @AutoMap()
  arrivalDate: Date;

  @Column()
  @AutoMap()
  arrivalCondition: string;

  @Column()
  @AutoMap()
  diagnosis: string;

  @Column()
  @AutoMap()
  diagnosisCost: number;

  @Column()
  @AutoMap()
  repairProposals: string;

  @Column()
  @AutoMap()
  invoiceDetails: string;

  @Column()
  @AutoMap()
  contractSigned: boolean;

  @Column()
  @AutoMap()
  advancePayment: number;

  @OneToMany(() => Order, (order) => order.receptionRecord)
  @AutoMap()
  orders: Order[];

  @CreateDateColumn()
  @AutoMap()
  createdAt: Date;

  @UpdateDateColumn()
  @AutoMap()
  updatedAt: Date;

  @ManyToOne(() => VehicleOwner, (owner) => owner.receptionRecords)
  @AutoMap()
  vehicleOwner: VehicleOwner;
}

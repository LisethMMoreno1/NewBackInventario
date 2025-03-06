import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { VehicleDeliveryRecord } from '../vehicleDeliveryRecord/vehicleDeliveryRecord.entity';
import { Order } from '../order/order.entity';

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

  @OneToOne(
    () => VehicleDeliveryRecord,
    (delivery) => delivery.receptionRecord,
    {
      cascade: true,
      nullable: true,
    },
  )
  @JoinColumn()
  deliveryRecord: VehicleDeliveryRecord;

  @OneToMany(() => Order, (order) => order.receptionRecord)
  orders: Order[]; // Relación con Order

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

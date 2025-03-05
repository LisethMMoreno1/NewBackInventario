import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { VehicleDeliveryRecord } from '../vehicleDeliveryRecord/vehicleDeliveryRecord.entity';

@Entity({ name: 'vehicle_reception_records' })
export class VehicleReceptionRecord {
  @PrimaryGeneratedColumn()
  id: number;

  // Date when the vehicle arrives at the workshop.
  @CreateDateColumn({ type: 'timestamp' })
  arrivalDate: Date; // Automatically set to the current timestamp on creation

  // Conditions of the vehicle upon arrival.
  @Column({ type: 'text', nullable: false }) // Mandatory field
  arrivalCondition: string;

  // Diagnosis: evaluation of the vehicle's condition.
  @Column({ type: 'text', nullable: true }) // Optional field
  diagnosis: string;

  // Cost of the diagnosis.
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true }) // Optional field
  diagnosisCost: number;

  // Repair proposals based on the diagnosis.
  @Column({ type: 'text', nullable: true }) // Optional field
  repairProposals: string;

  // Invoice details for the diagnostic service.
  @Column({ type: 'text', nullable: true }) // Optional field
  invoiceDetails: string;

  // Indicates whether the service contract has been signed.
  @Column({ type: 'boolean', default: false }) // Default value provided
  contractSigned: boolean;

  // Amount of the advance payment (e.g., 50% of the service cost).
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true }) // Optional field
  advancePayment: number;

  // One-to-one relationship with the vehicle delivery record.
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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

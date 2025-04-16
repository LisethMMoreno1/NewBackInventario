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
import { Order } from '../order/order.entity';

@Entity('vehicle_exit_records')
export class VehicleExitRecord {
    @PrimaryGeneratedColumn()
    @AutoMap()
    id: number;

    @ManyToOne(() => VehicleOwner, (vehicleOwner) => vehicleOwner.exitRecords, { nullable: false })
    @JoinColumn({ name: 'identificationNumber_vehicleOwner' })
    @AutoMap()
    vehicleOwner: VehicleOwner;

    @ManyToOne(() => Order, (order) => order.exitRecords, { nullable: false })
    @JoinColumn({ name: 'orderNumber_order' })
    @AutoMap()
    order: Order;

    @Column({ length: 20 })
    @AutoMap()
    licensePlate: string;

    @CreateDateColumn()
    @AutoMap()
    exitDateTime: Date;

    @Column({ type: 'text', nullable: true })
    @AutoMap()
    exitDescription: string;

    @Column({ type: 'text', nullable: true })
    @AutoMap()
    ownerSignature: string;
}


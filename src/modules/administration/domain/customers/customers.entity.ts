import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  JoinColumn,
} from 'typeorm';
import { TypeOfIdentification } from 'src/modules/maintenance/domain/type-of-identification/typeidentification.entity';
import { Order } from '../orders/orders.entity';
import { Payment } from '../payment/payment.entity';
import { AutoMap } from '@automapper/classes';

@Entity({ name: 'customers' })
@Unique(['identificationNumber'])
export class Customers {
  @PrimaryGeneratedColumn()
  id_customers: number;

  @ManyToOne(
    () => TypeOfIdentification,
    (typeOfIdentification) => typeOfIdentification.customers,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'Id_TypeOfIdentification' })
  @AutoMap()
  typeOfIdentification: TypeOfIdentification;

  @Column({ nullable: false })
  @AutoMap()
  identificationNumber: string;

  @Column()
  @AutoMap()
  name_customers: string;

  @Column()
  @AutoMap()
  phone_customers: string;

  @Column()
  @AutoMap()
  email_customers: string;

  @Column()
  @AutoMap()
  address_customers: string;

  @OneToMany(() => Order, (order) => order.customer)
  @AutoMap()
  orders: Order[];

  @OneToMany(() => Payment, (payment) => payment.customer)
  @AutoMap()
  payments: Payment[];

  @Column({ type: 'boolean', default: false })
  @AutoMap()
  state: boolean;

  @CreateDateColumn()
  @AutoMap()
  createdAt: Date;

  @UpdateDateColumn()
  @AutoMap()
  updatedAt: Date;
}

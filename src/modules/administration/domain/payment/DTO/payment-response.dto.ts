import { AutoMap } from '@automapper/classes';
import { Order } from '../../orders/orders.entity';
import { Customers } from '../../customers/customers.entity';
import { Bank } from 'src/modules/maintenance/domain/bank/bank.entity';

export class PaymentResponseDto {
  @AutoMap()
  id_payment: number;

  @AutoMap()
  sub_total: number;

  @AutoMap()
  taxes: number;

  @AutoMap()
  shipping: number;

  @AutoMap()
  total: number;

  @AutoMap()
  dateOfPayment: Date;

  @AutoMap()
  order_number: string;

  @AutoMap()
  order: Order;

  @AutoMap()
  customer: Customers;

  @AutoMap()
  bank: Bank;

  @AutoMap()
  state: boolean;

  @AutoMap()
  created_at: Date;

  @AutoMap()
  updated_at: Date;
}

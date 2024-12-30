import { AutoMap } from '@automapper/classes';
import { OrderDetails } from '../../orderDetails/orderDetails.entity';
import { OrderStatus } from '../../orderStatus/orderStatus.entity';
import { Payment } from '../../payment/payment.entity';
import { Customers } from '../../customers/customers.entity';

export class OrderResponseDto {
  @AutoMap()
  id_order: number;

  @AutoMap()
  order_number: string;

  @AutoMap()
  date_entry: Date;

  @AutoMap()
  customer: Customers;

  @AutoMap()
  orderDetails: OrderDetails;

  @AutoMap()
  orderStatus: OrderStatus;

  @AutoMap()
  payments: Payment[];

  @AutoMap()
  state: boolean;

  @AutoMap()
  created_at: Date;

  @AutoMap()
  updated_at: Date;
}

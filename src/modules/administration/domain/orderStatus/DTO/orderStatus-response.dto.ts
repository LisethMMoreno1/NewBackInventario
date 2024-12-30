import { AutoMap } from '@automapper/classes';
import { OrderDetails } from '../../orderDetails/orderDetails.entity';
import { Payment } from '../../payment/payment.entity';
import { Order } from '../../orders/orders.entity';

export class OrderStatusResponseDto {
  @AutoMap()
  id_orderStatus: number;

  @AutoMap()
  order_status: string;

  @AutoMap()
  description: string;

  @AutoMap()
  orderDetails: OrderDetails[];

  @AutoMap()
  orders: Order[];

  @AutoMap()
  Payment: Payment[];

  @AutoMap()
  state: boolean;

  @AutoMap()
  created_at: Date;

  @AutoMap()
  updated_at: Date;
}

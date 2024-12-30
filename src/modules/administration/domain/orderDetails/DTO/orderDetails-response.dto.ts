import { AutoMap } from '@automapper/classes';
import { Order } from '../../orders/orders.entity';
import { OrderStatus } from '../../orderStatus/orderStatus.entity';

export class OrderDetailsResponseDto {
  @AutoMap()
  id_orderDetails: number;

  @AutoMap()
  brand: string;

  @AutoMap()
  yearOfManufacture: number;

  @AutoMap()
  plate_number: string;

  @AutoMap()
  description_problem: string;

  @AutoMap()
  dateOfEntry: Date;

  @AutoMap()
  order: Order;

  @AutoMap()
  orderStatus: OrderStatus;

  /*   @AutoMap()
  categories: Category[];

  @AutoMap()
  subcategories: Subcategory[]; */

  @AutoMap()
  state: boolean;

  @AutoMap()
  created_at: Date;

  @AutoMap()
  updated_at: Date;
}

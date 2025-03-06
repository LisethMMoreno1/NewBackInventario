/* istanbul ignore file */
import { CreateOrderService } from './createOrder.service';
import { DeleteOrderService } from './deleteOrder.service';
import { GetAllOrdersService } from './getAllOrder.service';
import { GetOneOrderService } from './getOneOrder.service';
import { UpdateOrderService } from './updateOrder.service';

/**
 * Array of user services.
 */
export const OrderServices = [
  CreateOrderService,
  DeleteOrderService,
  GetAllOrdersService,
  GetOneOrderService,
  UpdateOrderService,
];

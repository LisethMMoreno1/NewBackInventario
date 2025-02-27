/* istanbul ignore file */
import { Module } from './module/module.entity';
import { Option } from './option/option.entity';
import { OrderDetails } from './orderDetails/orderDetails.entity';
import { Order } from './orders/orders.entity';
import { OrderStatus } from './orderStatus/orderStatus.entity';
import { Payment } from './payment/payment.entity';
import { Role } from './rol/rol.entity';
import { RoleModule } from './roleModule/roleModule.entity';
import { RoleOption } from './roleOption/roleOption.entity';
import { Submodule } from './subModule/subModule.entity';
import { User } from './user/user.entity';

export const administrationEntities = [
  User,
  Role,
  Order,
  Payment,
  OrderStatus,
  OrderDetails,
  Module,
  Option,
  RoleModule,
  RoleOption,
  Submodule,
];

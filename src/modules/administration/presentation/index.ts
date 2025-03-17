/* istanbul ignore file */

import { OrderController } from './controllers/order/order.controller';
import { RolesController } from './controllers/role/role.controller';

import { ToolController } from './controllers/tool/tool.controller';
import { AuthController } from './controllers/user/auth.controller';
import { UserController } from './controllers/user/user.controller';
import { VehicleDeliveryRecordController } from './controllers/vehicleDeliveryRecord/vehicleDeliveryRecord.controller';
import { VehicleOwnerController } from './controllers/vehicleOwner/vehicleOwner.controller';
import { VehicleReceptionRecordController } from './controllers/vehicleReceptionRecord/vehicleReceptionRecord.controller';

export const Controllers = [
  UserController,
  ToolController,
  VehicleReceptionRecordController,
  VehicleDeliveryRecordController,
  OrderController,
  AuthController,
  RolesController,
  VehicleOwnerController,
];

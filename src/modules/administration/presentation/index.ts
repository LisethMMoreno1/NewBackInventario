/* istanbul ignore file */

import { OrderController } from './controllers/order/order.controller';

import { ToolController } from './controllers/tool/tool.controller';
import { UserController } from './controllers/user/user.controller';
import { VehicleDeliveryRecordController } from './controllers/vehicleDeliveryRecord/vehicleDeliveryRecord.controller';
import { VehicleReceptionRecordController } from './controllers/vehicleReceptionRecord/vehicleReceptionRecord.controller';

export const Controllers = [
  UserController,

  ToolController,
  VehicleReceptionRecordController,
  VehicleDeliveryRecordController,
  OrderController,
];

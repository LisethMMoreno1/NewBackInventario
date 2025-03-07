/* istanbul ignore file */

import { Payment } from './payment/payment.entity';

import { Tool } from './tool/tool.entity';
import { User } from './user/user.entity';
import { VehicleDeliveryRecord } from './vehicleDeliveryRecord/vehicleDeliveryRecord.entity';
import { VehicleReceptionRecord } from './vehicleReceptionRecord/vehicleReceptionRecord.entity';

export const administrationEntities = [
  User,

  Payment,

  Option,

  Tool,
  VehicleReceptionRecord,
  VehicleDeliveryRecord,
];

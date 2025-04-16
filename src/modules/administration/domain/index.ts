/* istanbul ignore file */

import { Payment } from './payment/payment.entity';
import { RolesEnum } from './role/roles.enum';
import { Tool } from './tool/tool.entity';
import { User } from './user/user.entity';
import { VehicleExitRecord } from './vehicleExitRecord/vehicleExitRecord.entity';
import { VehicleReceptionRecord } from './vehicleReceptionRecord/vehicleReceptionRecord.entity';

export const administrationEntities = [
  User,
  Payment,
  Option,
  Tool,
  VehicleReceptionRecord,
  RolesEnum,
  VehicleExitRecord
];

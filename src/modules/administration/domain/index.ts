/* istanbul ignore file */
import { Module } from './module/module.entity';
import { Option } from './option/option.entity';
import { Payment } from './payment/payment.entity';
import { Role } from './rol/rol.entity';
import { RoleModule } from './roleModule/roleModule.entity';
import { RoleOption } from './roleOption/roleOption.entity';
import { Submodule } from './subModule/subModule.entity';
import { Tool } from './tool/tool.entity';
import { User } from './user/user.entity';
import { VehicleDeliveryRecord } from './vehicleDeliveryRecord/vehicleDeliveryRecord.entity';
import { VehicleReceptionRecord } from './vehicleReceptionRecord/vehicleReceptionRecord.entity';

export const administrationEntities = [
  User,
  Role,
  Payment,
  Module,
  Option,
  RoleModule,
  RoleOption,
  Submodule,
  Tool,
  VehicleReceptionRecord,
  VehicleDeliveryRecord,
];

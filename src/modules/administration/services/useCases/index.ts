/* istanbul ignore file */
import { ModuleProfile } from '../profiles/module/module.profile';
import { OptionProfile } from '../profiles/option/option.profile';
import { OrderProfile } from '../profiles/order/order.profile';
import { PaymentProfile } from '../profiles/payment/payment.profile';
import { RoleProfile } from '../profiles/rol/rol.profile';
import { RoleModuleProfile } from '../profiles/roleModule/roleModule.profile';
import { RoleOptionProfile } from '../profiles/roleOption/roleOption.profile';
import { subModuleProfile } from '../profiles/subModule/subModule.profile';
import { ToolProfile } from '../profiles/tool/tool.profile';
import { UserProfile } from '../profiles/user/user.profile';
import { VehicleDeliveryRecordProfile } from '../profiles/vehicleDeliveryRecord/vehicleDeliveryRecord.profile';
import { VehicleReceptionRecordProfile } from '../profiles/vehicleReceptionRecord/vehicleReceptionRecord.profile';
import { ModuleServices } from './module';
import { OptionServices } from './option';
import { OrderServices } from './order/indext';
import { RoleServices } from './rol';
import { RoleModuleServices } from './roleModule';
import { RoleOptionServices } from './roleOption';
import { SubModuleServices } from './subModule';
import { ToolServices } from './tool';
import { UserServices } from './user';
import { VehicleDeliveryRecordService } from './vehicleDeliveryRecord';
import { VehicleReceptionRecordService } from './vehicleReceptionRecord';

/**
 * Array of administration services.
 */
export const AdministrationServices = [
  ...UserServices,
  ...RoleServices,
  ...ModuleServices,
  ...OptionServices,
  ...SubModuleServices,
  ...RoleModuleServices,
  ...RoleOptionServices,
  ...ToolServices,
  ...VehicleReceptionRecordService,
  ...VehicleDeliveryRecordService,
  ...OrderServices,
];

/**
 * Array of administration profiles.
 */
export const AdministrationProfiles = [
  UserProfile,
  RoleProfile,
  ToolProfile,
  PaymentProfile,
  subModuleProfile,
  RoleOptionProfile,
  RoleModuleProfile,
  OptionProfile,
  ModuleProfile,
  VehicleDeliveryRecordProfile,
  VehicleReceptionRecordProfile,
  OrderProfile,
];

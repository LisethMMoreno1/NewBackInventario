/* istanbul ignore file */

import { OrderProfile } from '../profiles/order/order.profile';
import { PaymentProfile } from '../profiles/payment/payment.profile';
import { RolesProfile } from '../profiles/role/roles.profile';
import { ToolProfile } from '../profiles/tool/tool.profile';
import { UserProfile } from '../profiles/user/user.profile';
import { VehicleDeliveryRecordProfile } from '../profiles/vehicleDeliveryRecord/vehicleDeliveryRecord.profile';
import { VehicleOwnerProfile } from '../profiles/vehicleOwner/vehicleOwner.profile';
import { VehicleReceptionRecordProfile } from '../profiles/vehicleReceptionRecord/vehicleReceptionRecord.profile';
import { OrderServices } from './order';
import { ToolServices } from './tool';
import { UserServices } from './user';
import { VehicleDeliveryRecordService } from './vehicleDeliveryRecord';
import { VehicleOwnerServices } from './vehicleOwner';
import { VehicleReceptionRecordService } from './vehicleReceptionRecord';

/**
 * Array of administration services.
 */
export const AdministrationServices = [
  ...UserServices,
  ...ToolServices,
  ...VehicleReceptionRecordService,
  ...VehicleDeliveryRecordService,
  ...OrderServices,
  ...VehicleOwnerServices,
];

/**
 * Array of administration profiles.
 */
export const AdministrationProfiles = [
  UserProfile,
  ToolProfile,
  PaymentProfile,
  VehicleDeliveryRecordProfile,
  VehicleReceptionRecordProfile,
  OrderProfile,
  RolesProfile,
  VehicleOwnerProfile,
];

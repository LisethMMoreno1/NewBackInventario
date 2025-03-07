/* istanbul ignore file */

import { OrderProfile } from '../profiles/order/order.profile';
import { PaymentProfile } from '../profiles/payment/payment.profile';

import { ToolProfile } from '../profiles/tool/tool.profile';
import { UserProfile } from '../profiles/user/user.profile';
import { VehicleDeliveryRecordProfile } from '../profiles/vehicleDeliveryRecord/vehicleDeliveryRecord.profile';
import { VehicleReceptionRecordProfile } from '../profiles/vehicleReceptionRecord/vehicleReceptionRecord.profile';

import { OrderServices } from './order';

import { ToolServices } from './tool';
import { UserServices } from './user';
import { VehicleDeliveryRecordService } from './vehicleDeliveryRecord';
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
];

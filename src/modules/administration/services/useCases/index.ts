/* istanbul ignore file */
import { CustomersProfile } from '../profiles/customers/customers.profile';
import { ModuleProfile } from '../profiles/module/module.profile';
import { OptionProfile } from '../profiles/option/option.profile';
import { OrderDetailsProfile } from '../profiles/orderDetails/orderDetails.profile';
import { OrdersProfile } from '../profiles/orders/orders.profile';
import { orderStatusProfile } from '../profiles/orderStatus/orderStatus.profile';
import { PaymentProfile } from '../profiles/payment/payment.profile';
import { RoleProfile } from '../profiles/rol/rol.profile';
import { RoleModuleProfile } from '../profiles/roleModule/roleModule.profile';
import { RoleOptionProfile } from '../profiles/roleOption/roleOption.profile';
import { subModuleProfile } from '../profiles/subModule/subModule.profile';
import { UserProfile } from '../profiles/user/user.profile';
import { ModuleServices } from './module';
import { OptionServices } from './option';
import { RoleServices } from './rol';
import { RoleModuleServices } from './roleModule';
import { RoleOptionServices } from './roleOption';
import { SubModuleServices } from './subModule';
import { UserServices } from './user';

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
];

/**
 * Array of administration profiles.
 */
export const AdministrationProfiles = [
  UserProfile,
  RoleProfile,
  CustomersProfile,
  OrderDetailsProfile,
  OrdersProfile,
  orderStatusProfile,
  PaymentProfile,
  subModuleProfile,
  RoleOptionProfile,
  RoleModuleProfile,
  OptionProfile,
  ModuleProfile,
];

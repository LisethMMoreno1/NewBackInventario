/* istanbul ignore file */
import { MaintenanceContext } from 'src/modules/maintenance/infrastruture/persistence/context/maintenaceContext.service';
import { TypeOfIdentificationRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typeIdentification.repository';
import { TypeOfGenderRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typGender.repository';
import { AdministrationContext } from './persistence/context/administrationContext.service';
import { CustumersRepository } from './persistence/repositories/custumers.repository';
import { ModuleRepository } from './persistence/repositories/module.repository';
import { OptionRepository } from './persistence/repositories/option.repository';
import { OrderDetailsRepository } from './persistence/repositories/orderDetails.repository';
import { OrderRepository } from './persistence/repositories/orders.repository';
import { OrderStatusRepository } from './persistence/repositories/orderStatus.repository';
import { PaymentRepository } from './persistence/repositories/payment.repository';
import { RolRepository } from './persistence/repositories/rol.repository';
import { RoleModuleRepository } from './persistence/repositories/roleModule.repository';
import { RoleOptionRepository } from './persistence/repositories/roleOption.repository';
import { SubmoduleRepository } from './persistence/repositories/subModule.repository';
import { UserRepository } from './persistence/repositories/user.repository';
/**
 * An array of persistence providers for the administration module.
 */
export const AdministrationPersistenceProvider = [
  AdministrationContext,
  UserRepository,
  RolRepository,
  CustumersRepository,
  OrderDetailsRepository,
  OrderRepository,
  OrderStatusRepository,
  PaymentRepository,
  SubmoduleRepository,
  OptionRepository,
  RoleModuleRepository,
  RoleOptionRepository,
  ModuleRepository,
  TypeOfIdentificationRepository,
  TypeOfGenderRepository,
  MaintenanceContext,
];

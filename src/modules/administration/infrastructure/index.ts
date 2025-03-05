/* istanbul ignore file */
import { MaintenanceContext } from 'src/modules/maintenance/infrastruture/persistence/context/maintenaceContext.service';
import { AdministrationContext } from './persistence/context/administrationContext.service';
import { ModuleRepository } from './persistence/repositories/module.repository';
import { OptionRepository } from './persistence/repositories/option.repository';
import { PaymentRepository } from './persistence/repositories/payment.repository';
import { RolRepository } from './persistence/repositories/rol.repository';
import { RoleModuleRepository } from './persistence/repositories/roleModule.repository';
import { RoleOptionRepository } from './persistence/repositories/roleOption.repository';
import { SubmoduleRepository } from './persistence/repositories/subModule.repository';
import { ToolRepository } from './persistence/repositories/tool.repository';
import { UserRepository } from './persistence/repositories/user.repository';
import { VehicleReceptionRecordRepository } from './persistence/repositories/vehicleReceptionRecord.repository';
import { VehicleDeliveryRecordRepository } from './persistence/repositories/vehicleDeliveryRecord.repository';
/**
 * An array of persistence providers for the administration module.
 */
export const AdministrationPersistenceProvider = [
  AdministrationContext,
  UserRepository,
  RolRepository,
  PaymentRepository,
  SubmoduleRepository,
  OptionRepository,
  RoleModuleRepository,
  RoleOptionRepository,
  ModuleRepository,
  ToolRepository,
  VehicleReceptionRecordRepository,
  VehicleDeliveryRecordRepository,
  MaintenanceContext,
];

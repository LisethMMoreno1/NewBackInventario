/* istanbul ignore file */
import { MaintenanceContext } from 'src/modules/maintenance/infrastruture/persistence/context/maintenaceContext.service';
import { AdministrationContext } from './persistence/context/administrationContext.service';
import { PaymentRepository } from './persistence/repositories/payment.repository';
import { OrderRepository } from './persistence/repositories/order.repository';
import { ToolRepository } from './persistence/repositories/tool.repository';
import { UserRepository } from './persistence/repositories/user.repository';
import { VehicleDeliveryRecordRepository } from './persistence/repositories/vehicleDeliveryRecord.repository';
import { VehicleReceptionRecordRepository } from './persistence/repositories/vehicleReceptionRecord.repository';
import { VehicleOwnerRepository } from './persistence/repositories/vehicleOwner.repository';
/**
 * An array of persistence providers for the administration module.
 */
export const AdministrationPersistenceProvider = [
  AdministrationContext,
  UserRepository,
  PaymentRepository,
  ToolRepository,
  VehicleReceptionRecordRepository,
  VehicleDeliveryRecordRepository,
  OrderRepository,
  VehicleOwnerRepository,
  MaintenanceContext,
];

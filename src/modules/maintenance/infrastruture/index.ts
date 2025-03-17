/* istanbul ignore file */
import { MaintenanceContext } from './persistence/context/maintenaceContext.service';
import { CityRepository } from './persistence/repositories/city.repository';
import { DepartmentRepository } from './persistence/repositories/department.repository';

/**
 * An array of persistence providers for the administration module.
 */

export const MaintenancePersistenceProvider = [
  MaintenanceContext,
  DepartmentRepository,
  CityRepository,
];

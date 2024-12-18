/* istanbul ignore file */
import { MaintenanceContext } from './persistence/context/maintenaceContext.service';
import { BankRepository } from './persistence/repositories/bank.repository';
import { CityRepository } from './persistence/repositories/city.repository';
import { DepartmentRepository } from './persistence/repositories/department.repository';
import { TypeOfAddressRepository } from './persistence/repositories/typeAddress.repository';
import { TypeOfCurrencyRepository } from './persistence/repositories/typeCurrency.repository';
import { TypeOfIdentificationRepository } from './persistence/repositories/typeIdentification.repository';
import { TypeOfGenderRepository } from './persistence/repositories/typGender.repository';

/**
 * An array of persistence providers for the administration module.
 */

export const MaintenancePersistenceProvider = [
  MaintenanceContext,
  BankRepository,
  TypeOfIdentificationRepository,
  TypeOfGenderRepository,
  TypeOfAddressRepository,
  DepartmentRepository,
  CityRepository,
  TypeOfCurrencyRepository,
];

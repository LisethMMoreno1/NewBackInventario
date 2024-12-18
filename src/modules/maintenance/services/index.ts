/* istanbul ignore file */

import { DepartmentProfile } from './profiles/bank/bank.profile';
import { CityProfile } from './profiles/cities/cities.profile';
import { BankProfile } from './profiles/department/department.profile';
import { TypeOfCurrencyProfile } from './profiles/typeOfCurrency/typeCurrency.profile';
import { TypeOfGenderProfile } from './profiles/typeOfGender/typeGender.profile';
import { TypeOfIdentificationProfile } from './profiles/typeOfIdentification/typeIdentification.profile';
import { BankServices } from './useCases/bank';
import { CityServices } from './useCases/cities';
import { DepartmentService } from './useCases/department';
import { TypeOfAddressService } from './useCases/type-of-address';
import { TypeOfCurrencyService } from './useCases/type-of-currency';
import { TypeOfGenderService } from './useCases/type-of-gender';
import { TypeIdentificationServices } from './useCases/type-of-identification';

/**
 * Array of Maintenance services.
 */
export const MaintenanceServices = [
  ...BankServices,
  ...TypeIdentificationServices,
  ...TypeOfGenderService,
  ...TypeOfAddressService,
  ...DepartmentService,
  ...CityServices,
  ...TypeOfCurrencyService,
];

/**
 * Array of Maintenance profiles.
 */
export const MaintenanceProfiles = [
  BankProfile,
  TypeOfIdentificationProfile,
  TypeOfGenderProfile,
  DepartmentProfile,
  CityProfile,
  TypeOfCurrencyProfile,
];

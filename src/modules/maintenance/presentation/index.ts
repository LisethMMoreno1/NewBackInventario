/* istanbul ignore file */
import { BankController } from './controllers/bank/bank.controller';
import { DepartmentsController } from './controllers/department/department.controller';
import { TypeOfAddressController } from './controllers/type-of-address/typeAddress.controller';
import { TypeOfCurrencyController } from './controllers/type-of-currency/typeCurrency.controller';
import { TypeOfGenderController } from './controllers/type-of-gender/typeGender.controller';
import { TypeOfIdentificationController } from './controllers/type-of-identification/typeIdentification.controller';

export const Controllers = [
  BankController,
  TypeOfIdentificationController,
  TypeOfGenderController,
  TypeOfAddressController,
  DepartmentsController,
  TypeOfCurrencyController,
];

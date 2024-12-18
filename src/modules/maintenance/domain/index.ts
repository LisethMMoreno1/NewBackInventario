/* istanbul ignore file */

import { Bank } from './bank/bank.entity';
import { City } from './cities/cities.entity';
import { Department } from './department/department.entity';
import { TypeOfAddress } from './type-of-address/typeAddress.entity';
import { TypeOfGender } from './type-of-gender/typeGender.entity';
import { TypeOfIdentification } from './type-of-identification/typeidentification.entity';

export const maintenanceEntities = [
  Bank,
  TypeOfIdentification,
  TypeOfGender,
  TypeOfAddress,
  City,
  Department,
];

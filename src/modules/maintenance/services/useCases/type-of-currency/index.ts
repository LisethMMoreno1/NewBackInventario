/* istanbul ignore file */

import { CreateTypeOfCurrencyService } from './createTypeCurrency.service';
import { DeleteTypeOfCurrencyService } from './deleteTypeCurrency.service';
import { GetAllTypeOfCurrencyService } from './getAllTypeCurrency.service';
import { GetOneTypeOfCurrencyService } from './getOneTypeCurrency.service';
import { UpdateTypeOfCurrencyService } from './updateTypeCurrency.service';

/**
 * Array of TypeOfCurrencyService services.
 */
export const TypeOfCurrencyService = [
  CreateTypeOfCurrencyService,
  DeleteTypeOfCurrencyService,
  GetAllTypeOfCurrencyService,
  GetOneTypeOfCurrencyService,
  UpdateTypeOfCurrencyService,
];

/* istanbul ignore file */

import { CreateTypeOfAddressService } from './createTypeAddress.service';
import { DeleteTypeOfAddressService } from './deleteTypeAddress.service';
import { GetAllTypeOfAddressService } from './getAllTypeAddress.service';
import { GetOneTypeOfAddressService } from './getOneTypeAddress.service';
import { UpdateTypeOfAddressService } from './updateTypeAddress.service';

/**
 * Array of TypeOfAddressService services.
 */
export const TypeOfAddressService = [
  DeleteTypeOfAddressService,
  CreateTypeOfAddressService,
  GetOneTypeOfAddressService,
  GetAllTypeOfAddressService,
  UpdateTypeOfAddressService,
];

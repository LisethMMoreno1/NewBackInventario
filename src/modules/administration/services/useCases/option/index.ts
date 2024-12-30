/* istanbul ignore file */

import { CreateOptionService } from './createOption.service';
import { DeleteOptionService } from './deleteOption.service';
import { GetAllOptionService } from './getAllOption.service';
import { GetOneOptionService } from './getOneOption.service';
import { UpdateOptionService } from './updateOption.service';

/**
 * Array of user services.
 */
export const OptionServices = [
  CreateOptionService,
  DeleteOptionService,
  GetAllOptionService,
  GetOneOptionService,
  UpdateOptionService,
];

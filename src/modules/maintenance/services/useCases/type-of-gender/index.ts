/* istanbul ignore file */

import { CreateTypeOfGenderService } from './createTypeGender.service';
import { DeleteTypeOfGenderService } from './deleteTypeGender.service';
import { GetAllTypeGenderService } from './getAllTypeGender.service';
import { GetOneTypeOfGenderService } from './getOneTypeGender.service';
import { UpdateTypeOfGenderService } from './updateTypeGender.service';

/**
 * Array of TypeOfGenderService services.
 */
export const TypeOfGenderService = [
  UpdateTypeOfGenderService,
  GetOneTypeOfGenderService,
  GetAllTypeGenderService,
  DeleteTypeOfGenderService,
  CreateTypeOfGenderService,
];

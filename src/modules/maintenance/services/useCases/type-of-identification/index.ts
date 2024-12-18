/* istanbul ignore file */

import { CreateTypeIdentificationService } from './createTypeIdentification.service';
import { DeleteTypeIdentificationService } from './deleteTypeIdentification.service';
import { GetAllTypeIdentificationService } from './getAllTypeIdentification.service';
import { GetOneTypeIdentificationService } from './getOneTypeIdentification.service';
import { UpdateTypeIdentificationService } from './updateTypeIdentification.service';

/**
 * Array of TypeIdentificationServices services.
 */
export const TypeIdentificationServices = [
  CreateTypeIdentificationService,
  GetAllTypeIdentificationService,
  GetOneTypeIdentificationService,
  UpdateTypeIdentificationService,
  DeleteTypeIdentificationService,
];

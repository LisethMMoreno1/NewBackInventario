/* istanbul ignore file */

import { CreateSubModuleService } from './createSubModule.service';
import { DeleteSubModuleService } from './deleteSubModule.service';
import { GetAllSubModuleService } from './getAllSubModule.service';
import { GetOneSubModuleService } from './getOneSubModule.service';
import { UpdateSubModuleService } from './updateSubModule.service';

/**
 * Array of user services.
 */
export const SubModuleServices = [
  CreateSubModuleService,
  DeleteSubModuleService,
  GetAllSubModuleService,
  GetOneSubModuleService,
  UpdateSubModuleService,
];

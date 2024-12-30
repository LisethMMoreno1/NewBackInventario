/* istanbul ignore file */

import { CreateModuleService } from './createModule.service';
import { DeleteModuleService } from './deleteModule.service';
import { GetAllModuleService } from './getAllModule.service';
import { GetOneModuleService } from './getOneModule.service';
import { UpdateModuleService } from './updateModule.service';

/**
 * Array of module services.
 */
export const ModuleServices = [
  CreateModuleService,
  DeleteModuleService,
  GetAllModuleService,
  GetOneModuleService,
  UpdateModuleService,
];

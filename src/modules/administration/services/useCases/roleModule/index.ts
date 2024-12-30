/* istanbul ignore file */

import { CreateRoleModuleService } from './createRoleModule.service';
import { DeleteRoleModuleService } from './deleteRoleModule.service';
import { GetAllRoleModuleService } from './getAllRoleModule.service';
import { GetOneRoleModuleService } from './getOneRoleModule.service';
import { UpdateRoleModuleService } from './updateRoleModule.service';

/**
 * Array of user services.
 */
export const RoleModuleServices = [
  CreateRoleModuleService,
  DeleteRoleModuleService,
  GetAllRoleModuleService,
  GetOneRoleModuleService,
  UpdateRoleModuleService,
];

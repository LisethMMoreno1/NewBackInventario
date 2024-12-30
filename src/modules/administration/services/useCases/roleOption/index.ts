/* istanbul ignore file */

import { CreateRoleOptionService } from './createRoleOption.service';
import { DeleteRoleOptionService } from './deleteRoleOption.service';
import { GetAllRoleOptionService } from './getAllRoleOption.service';
import { GetOneRoleOptionService } from './getOneRoleOption.service';
import { UpdateRoleOptionService } from './updateRoleOption.service';

/**
 * Array of user services.
 */
export const RoleOptionServices = [
  CreateRoleOptionService,
  DeleteRoleOptionService,
  GetAllRoleOptionService,
  GetOneRoleOptionService,
  UpdateRoleOptionService,
];

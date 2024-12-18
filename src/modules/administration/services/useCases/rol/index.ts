/* istanbul ignore file */
import { CreateRoleService } from './createRole.service';
import { DeleteRoleService } from './deleteRole.service';
import { GetAllRoleService } from './getAllRole.service';
import { GetOneRoleService } from './getOneRole.service';
import { UpdateRoleService } from './updateRole.service';

/**
 * Array of user services.
 */
export const RoleServices = [
  CreateRoleService,
  DeleteRoleService,
  GetAllRoleService,
  GetOneRoleService,
  UpdateRoleService,
];

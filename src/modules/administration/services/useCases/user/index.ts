/* istanbul ignore file */
import { CreateUserService } from './createUser.service';
import { DeleteUserService } from './deleteUser.service';
import { GetAllUserService } from './getAllUser.service';
import { GetOneUserService } from './getOneUser.service';
import { UpdateUserService } from './updateUser.service';

/**
 * Array of user services.
 */
export const UserServices = [
  CreateUserService,
  GetOneUserService,
  GetAllUserService,
  UpdateUserService,
  DeleteUserService,
];

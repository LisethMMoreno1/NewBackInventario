/* istanbul ignore file */
import { ModuleController } from './controllers/module/module.controller';
import { OptionController } from './controllers/option/option.controller';
import { RoleController } from './controllers/rol/role.controller';
import { RoleModuleController } from './controllers/roleModule/roleModule.controller';
import { RoleOptionController } from './controllers/roleOption/roleOption.controller';
import { SubmoduleController } from './controllers/subModule/subModule.controller';
import { UserController } from './controllers/user/user.controller';

export const Controllers = [
  UserController,
  RoleController,
  ModuleController,
  SubmoduleController,
  RoleModuleController,
  RoleOptionController,
  OptionController,
];

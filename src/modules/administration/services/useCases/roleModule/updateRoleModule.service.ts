import { Injectable, NotFoundException } from '@nestjs/common';
import { ModuleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/module.repository';
import { RolRepository } from 'src/modules/administration/infrastructure/persistence/repositories/rol.repository';
import { RoleModuleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/roleModule.repository';
import { SubmoduleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/subModule.repository';

@Injectable()
export class UpdateRoleModuleService {
  constructor(
    private readonly _roleModuleRepository: RoleModuleRepository,
    private readonly _rolRepository: RolRepository,
    private readonly _moduleRepository: ModuleRepository,
    private readonly _submoduleRepository: SubmoduleRepository,
  ) {}

  async handle(
    id_roleModule: number,
    roleId?: number,
    moduleId?: number,
    submoduleId?: number,
  ) {
    const roleModule = await this._roleModuleRepository.getOne({
      where: { id_roleModule },
      relations: ['role', 'module', 'submodule'],
    });

    if (!roleModule) {
      throw new NotFoundException('RoleModule not found');
    }

    if (roleId) {
      const role = await this._rolRepository.getOne({
        where: { id_rol: roleId },
      });
      if (!role) {
        throw new NotFoundException('Role not found');
      }
      roleModule.role = role;
    }

    if (moduleId) {
      const module = await this._moduleRepository.getOne({
        where: { id_module: moduleId },
      });
      if (!module) {
        throw new NotFoundException('Module not found');
      }
      roleModule.module = module;
    }

    if (submoduleId) {
      const submodule = await this._submoduleRepository.getOne({
        where: { id_subModule: submoduleId },
      });
      if (!submodule) {
        throw new NotFoundException('Submodule not found');
      }
      roleModule.submodule = submodule;
    }

    await this._roleModuleRepository.save(roleModule);
    return roleModule;
  }
}

import { Injectable } from '@nestjs/common';
import { RoleModuleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/roleModule.repository';

@Injectable()
export class GetAllRoleModuleService {
  constructor(private readonly _roleModuleRepository: RoleModuleRepository) {}

  async handle() {
    const roleModules = await this._roleModuleRepository.getAll({
      relations: ['role', 'module', 'submodule'],
    });
    return roleModules;
  }
}

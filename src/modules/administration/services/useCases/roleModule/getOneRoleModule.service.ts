import { Injectable, NotFoundException } from '@nestjs/common';
import { RoleModuleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/roleModule.repository';

@Injectable()
export class GetOneRoleModuleService {
  constructor(private readonly _roleModuleRepository: RoleModuleRepository) {}

  async handle(id_roleModule: number) {
    const roleModule = await this._roleModuleRepository.getOne({
      where: { id_roleModule },
      relations: ['role', 'module', 'submodule'],
    });

    if (!roleModule) {
      throw new NotFoundException('RoleModule not found');
    }

    return roleModule;
  }
}

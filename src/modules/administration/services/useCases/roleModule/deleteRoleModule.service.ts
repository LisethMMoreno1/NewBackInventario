import { Injectable, NotFoundException } from '@nestjs/common';
import { RoleModuleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/roleModule.repository';

@Injectable()
export class DeleteRoleModuleService {
  constructor(private readonly _roleModuleRepository: RoleModuleRepository) {}

  async handle(id_roleModule: number) {
    const roleModule = await this._roleModuleRepository.getOne({
      where: { id_roleModule },
    });
    if (!roleModule) {
      throw new NotFoundException('RoleModule not found');
    }

    await this._roleModuleRepository.delete(roleModule);
    return { message: 'RoleModule deleted successfully' };
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { RoleOptionRepository } from 'src/modules/administration/infrastructure/persistence/repositories/roleOption.repository';

@Injectable()
export class DeleteRoleOptionService {
  constructor(private readonly _roleOptionRepository: RoleOptionRepository) {}

  async handle(id_roleOption: number): Promise<void> {
    const roleOption = await this._roleOptionRepository.getOne({
      where: { id_roleOption },
    });
    if (!roleOption) {
      throw new NotFoundException('RoleOption not found');
    }

    await this._roleOptionRepository.delete(roleOption);
  }
}

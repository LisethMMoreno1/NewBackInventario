import { Injectable, NotFoundException } from '@nestjs/common';
import { RoleOption } from 'src/modules/administration/domain/roleOption/roleOption.entity';
import { RoleOptionRepository } from 'src/modules/administration/infrastructure/persistence/repositories/roleOption.repository';

@Injectable()
export class GetOneRoleOptionService {
  constructor(private readonly _roleOptionRepository: RoleOptionRepository) {}

  async handle(id_roleOption: number): Promise<RoleOption> {
    const roleOption = await this._roleOptionRepository.getOne({
      where: { id_roleOption },
    });
    if (!roleOption) {
      throw new NotFoundException('RoleOption not found');
    }

    return roleOption;
  }
}

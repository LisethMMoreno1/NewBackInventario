import { Injectable } from '@nestjs/common';
import { RoleOption } from 'src/modules/administration/domain/roleOption/roleOption.entity';
import { RoleOptionRepository } from 'src/modules/administration/infrastructure/persistence/repositories/roleOption.repository';

@Injectable()
export class GetAllRoleOptionService {
  constructor(private readonly _roleOptionRepository: RoleOptionRepository) {}

  async handle(): Promise<RoleOption[]> {
    return this._roleOptionRepository.getAll();
  }
}

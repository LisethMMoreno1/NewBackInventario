import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { Submodule } from 'src/modules/administration/domain/subModule/subModule.entity';
import { SubmoduleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/subModule.repository';

@Injectable()
export class GetAllSubModuleService {
  /**
   * Creates an instance of the UpdateSubModuleService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _submoduleRepository - The repository for managing Module entities.
   */

  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _submoduleRepository: SubmoduleRepository,
  ) {}

  /**
   * Obtiene todos los submódulos.
   * @returns Una lista de submódulos.
   */
  async handle(): Promise<Submodule[]> {
    return await this._submoduleRepository.getAll();
  }
}

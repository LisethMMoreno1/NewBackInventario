import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Submodule } from 'src/modules/administration/domain/subModule/subModule.entity';
import { SubmoduleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/subModule.repository';

@Injectable()
export class GetOneSubModuleService {
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
   * Obtiene un submódulo por su ID.
   * @param id - El ID del submódulo.
   * @returns El submódulo encontrado.
   */
  async handle(id: number): Promise<Submodule> {
    const submodule = await this._submoduleRepository.getOne({
      where: { id_subModule: id },
    });
    if (!submodule) {
      throw new NotFoundException(`Submodule with id ${id} not found`);
    }
    return submodule;
  }
}

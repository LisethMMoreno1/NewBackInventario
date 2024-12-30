import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { SubmoduleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/subModule.repository';

@Injectable()
export class DeleteSubModuleService {
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
   * Maneja la eliminación de un submódulo.
   * @param id - El ID del submódulo a eliminar.
   * @returns void
   */
  async handle(id: number): Promise<void> {
    const submodule = await this._submoduleRepository.getOne({
      where: { id_subModule: id },
    });
    if (!submodule) {
      throw new NotFoundException(`Submodule with id ${id} not found`);
    }
    await this._submoduleRepository.delete(submodule);
  }
}

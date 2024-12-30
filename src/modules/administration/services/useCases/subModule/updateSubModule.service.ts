import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { SubmoduleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/subModule.repository';
import { Mapper } from '@automapper/core';
import { SubmoduleRequestDto } from 'src/modules/administration/domain/subModule/DTO/subModule-request.dto';
import { Submodule } from 'src/modules/administration/domain/subModule/subModule.entity';

@Injectable()
export class UpdateSubModuleService {
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
   * Maneja la actualización de un submódulo.
   * @param id - El ID del submódulo a actualizar.
   * @param submoduleRequest - Los datos para la actualización del submódulo.
   * @returns El submódulo actualizado.
   */
  async handle(
    id: number,
    submoduleRequest: SubmoduleRequestDto,
  ): Promise<Submodule> {
    const submodule = await this._submoduleRepository.getOne({
      where: { id_subModule: id },
    });
    if (!submodule) {
      throw new NotFoundException(`Submodule with id ${id} not found`);
    }
    const updatedSubmodule = this._mapper.map(
      submoduleRequest,
      SubmoduleRequestDto,
      Submodule,
    );
    updatedSubmodule.id_subModule = id;
    return await this._submoduleRepository.save(updatedSubmodule);
  }
}

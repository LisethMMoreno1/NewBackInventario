import { Injectable } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { SubmoduleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/subModule.repository';
import { SubmoduleRequestDto } from 'src/modules/administration/domain/subModule/DTO/subModule-request.dto';
import { Submodule } from 'src/modules/administration/domain/subModule/subModule.entity';
import { Mapper } from '@automapper/core';

@Injectable()
export class CreateSubModuleService {
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
   * Maneja la creación de un nuevo submódulo.
   * @param submoduleRequest - El DTO para la creación de un submódulo.
   * @returns El submódulo creado.
   */
  async handle(submoduleRequest: SubmoduleRequestDto): Promise<Submodule> {
    const submodule = this._mapper.map(
      submoduleRequest,
      SubmoduleRequestDto,
      Submodule,
    );
    return await this._submoduleRepository.save(submodule);
  }
}

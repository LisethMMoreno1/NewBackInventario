import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { OptionRequestDto } from 'src/modules/administration/domain/option/DTO/option-request.dto';
import { Option } from 'src/modules/administration/domain/option/option.entity';
import { OptionRepository } from 'src/modules/administration/infrastructure/persistence/repositories/option.repository';
import { SubmoduleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/subModule.repository';

@Injectable()
export class CreateOptionService {
  /**
   * Creates an instance of the CreateOptionService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _optionRepository - The repository for managing Option entities.
   * @param _submoduleRepository - The repository for managing Submodule entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _optionRepository: OptionRepository,
    private readonly _submoduleRepository: SubmoduleRepository,
  ) {}

  /**
   * Handles the creation of a new Option.
   * @param optionRequest - Data Transfer Object containing option details.
   * @returns The created Option entity.
   * @throws NotFoundException if the associated Submodule is not found.
   */
  async handle(optionRequest: OptionRequestDto): Promise<Option> {
    const submodule = await this._submoduleRepository.getOne({
      where: { id_subModule: optionRequest.submodule_id },
    });

    if (!submodule) {
      throw new NotFoundException(
        `Submodule with ID ${optionRequest.submodule_id} not found`,
      );
    }

    const option = this._mapper.map(optionRequest, OptionRequestDto, Option);

    option.submodule = submodule;

    return await this._optionRepository.save(option);
  }
}

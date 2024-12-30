import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { OptionRequestDto } from 'src/modules/administration/domain/option/DTO/option-request.dto';
import { Option } from 'src/modules/administration/domain/option/option.entity';
import { OptionRepository } from 'src/modules/administration/infrastructure/persistence/repositories/option.repository';
import { SubmoduleRepository } from 'src/modules/administration/infrastructure/persistence/repositories/subModule.repository';

@Injectable()
export class UpdateOptionService {
  /**
   * Creates an instance of the UpdateSubModuleService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _optionRepository - The repository for managing Module entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _optionRepository: OptionRepository,
    private readonly _submoduleRepository: SubmoduleRepository,
  ) {}

  async handle(id: number, optionRequest: OptionRequestDto): Promise<Option> {
    const option = await this._optionRepository.getOne({
      where: { id_option: id },
    });
    if (!option) {
      throw new NotFoundException('Option not found');
    }

    if (optionRequest.submodule_id) {
      const submodule = await this._submoduleRepository.getOne({
        where: { id_subModule: optionRequest.submodule_id },
      });
      if (!submodule) {
        throw new Error('Submodule not found');
      }
      option.submodule = submodule;
    }

    this._mapper.map(optionRequest, OptionRequestDto, Option);
    return await this._optionRepository.save(option);
  }
}

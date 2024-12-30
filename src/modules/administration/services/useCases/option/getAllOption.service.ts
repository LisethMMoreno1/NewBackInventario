import { Injectable } from '@nestjs/common';
import { Option } from 'src/modules/administration/domain/option/option.entity';
import { OptionRepository } from 'src/modules/administration/infrastructure/persistence/repositories/option.repository';

@Injectable()
export class GetAllOptionService {
  /**
   * Creates an instance of the UpdateSubModuleService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _optionRepository - The repository for managing Module entities.
   */

  constructor(private readonly _optionRepository: OptionRepository) {}

  async handle(): Promise<Option[]> {
    return await this._optionRepository.getAll({
      relations: ['submodule', 'roleOptions'],
    });
  }
}

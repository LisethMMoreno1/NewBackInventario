import { Injectable, NotFoundException } from '@nestjs/common';
import { Option } from 'src/modules/administration/domain/option/option.entity';
import { OptionRepository } from 'src/modules/administration/infrastructure/persistence/repositories/option.repository';

@Injectable()
export class GetOneOptionService {
  /**
   * Creates an instance of the UpdateSubModuleService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _optionRepository - The repository for managing Module entities.
   */

  constructor(private readonly _optionRepository: OptionRepository) {}

  async handle(id: number): Promise<Option> {
    const option = await this._optionRepository.getOne({
      where: { id_option: id },
      relations: ['submodule', 'roleOptions'],
    });
    if (!option) {
      throw new NotFoundException('Option not found');
    }
    return option;
  }
}

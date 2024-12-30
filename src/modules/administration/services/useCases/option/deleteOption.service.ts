import { Injectable, NotFoundException } from '@nestjs/common';
import { OptionRepository } from 'src/modules/administration/infrastructure/persistence/repositories/option.repository';

@Injectable()
export class DeleteOptionService {
  /**
   * Creates an instance of the UpdateSubModuleService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _optionRepository - The repository for managing Module entities.
   */

  constructor(private readonly _optionRepository: OptionRepository) {}

  async handle(id: number): Promise<void> {
    const option = await this._optionRepository.getOne({
      where: { id_option: id },
    });
    if (!option) {
      throw new NotFoundException('Option not found');
    }
    await this._optionRepository.delete(option);
  }
}

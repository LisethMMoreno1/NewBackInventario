import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TypeOfCurrencyRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typeCurrency.repository';

/**
 * Service class for deleting a TypeOfCurrency.
 */
@Injectable()
export class DeleteTypeOfCurrencyService {
  /**
   * Constructor for DeleteTypeOfCurrencyService.
   * @param _mapper - The mapper used for mapping objects.
   * @param _typeOfCurrencyRepository - The repository for managing TypeOfCurrency entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeOfCurrencyRepository: TypeOfCurrencyRepository,
  ) {}

  /**
   * Deletes a Currency type by its ID.
   * @param id_typeOfCurrency - The ID of the Currency type to delete.
   * @throws NotFoundException if the Currency type is not found.
   */
  async delete(id_typeOfCurrency: number): Promise<void> {
    const existingTypeOfCurrency = await this._typeOfCurrencyRepository.getOne({
      where: { id_typeOfCurrency },
    });

    if (!existingTypeOfCurrency) {
      throw new NotFoundException('El tipo de moneda no fue encontrado.');
    }

    await this._typeOfCurrencyRepository.delete(id_typeOfCurrency);
  }
}

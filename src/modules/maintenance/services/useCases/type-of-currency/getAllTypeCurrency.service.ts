import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { TypeOfCurrencyResponseDto } from 'src/modules/maintenance/domain/type-of-currency/DTO/typeCurrency-response.dto';
import { TypeOfCurrency } from 'src/modules/maintenance/domain/type-of-currency/typeCurrency.entity';
import { TypeOfCurrencyRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typeCurrency.repository';

/**
 * Service class for retrieving all types of currencies.
 */
@Injectable()
export class GetAllTypeOfCurrencyService {
  /**
   * Constructor for GetAllTypeOfCurrencyService.
   * @param _mapper - The mapper used for mapping objects.
   * @param _typeOfCurrencyRepository - The repository for managing TypeOfCurrency entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeOfCurrencyRepository: TypeOfCurrencyRepository,
  ) {}

  /**
   * Retrieves all types of currencies.
   * @returns An array of TypeOfCurrencyResponseDto.
   */
  async getAll(): Promise<TypeOfCurrencyResponseDto[]> {
    const typeOfCurrencies = await this._typeOfCurrencyRepository.getAll();

    return typeOfCurrencies.map((typeOfCurrency) =>
      this._mapper.map(
        typeOfCurrency,
        TypeOfCurrency,
        TypeOfCurrencyResponseDto,
      ),
    );
  }
}

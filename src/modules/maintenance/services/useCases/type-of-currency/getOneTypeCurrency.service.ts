import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TypeOfCurrencyResponseDto } from 'src/modules/maintenance/domain/type-of-currency/DTO/typeCurrency-response.dto';
import { TypeOfCurrency } from 'src/modules/maintenance/domain/type-of-currency/typeCurrency.entity';
import { TypeOfCurrencyRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typeCurrency.repository';

/**
 * Service class for retrieving a single TypeOfCurrency.
 */
@Injectable()
export class GetOneTypeOfCurrencyService {
  /**
   * Constructor for GetOneTypeOfCurrencyService.
   * @param _mapper - The mapper used for mapping objects.
   * @param _typeOfCurrencyRepository - The repository for managing TypeOfCurrency entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeOfCurrencyRepository: TypeOfCurrencyRepository,
  ) {}

  /**
   * Gets a TypeOfCurrency by its ID.
   * @param id_typeOfCurrency - The ID of the TypeOfCurrency to retrieve.
   * @returns A TypeOfCurrencyResponseDto.
   * @throws NotFoundException if the TypeOfCurrency is not found.
   */
  async getOne(id_typeOfCurrency: number): Promise<TypeOfCurrencyResponseDto> {
    const typeOfCurrency = await this._typeOfCurrencyRepository.getOne({
      where: { id_typeOfCurrency },
    });

    if (!typeOfCurrency) {
      throw new NotFoundException('El tipo de moneda no fue encontrado.');
    }

    return this._mapper.map(
      typeOfCurrency,
      TypeOfCurrency,
      TypeOfCurrencyResponseDto,
    );
  }
}

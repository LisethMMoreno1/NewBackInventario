import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TypeOfCurrency } from 'src/modules/maintenance/domain/type-of-currency/typeCurrency.entity';
import { TypeOfCurrencyRequestDto } from 'src/modules/maintenance/domain/type-of-currency/DTO/typeCurrency-request.dto';
import { TypeOfCurrencyResponseDto } from 'src/modules/maintenance/domain/type-of-currency/DTO/typeCurrency-response.dto';
import { TypeOfCurrencyRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typeCurrency.repository';

/**
 * Service class for updating a TypeOfCurrency entity.
 */
@Injectable()
export class UpdateTypeOfCurrencyService {
  /**
   * Initializes a new instance of the UpdateTypeOfCurrencyService class.
   * @param _mapper - The mapper used for object transformations.
   * @param _typeOfCurrencyRepository - The repository for managing TypeOfCurrency entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeOfCurrencyRepository: TypeOfCurrencyRepository,
  ) {}

  /**
   * Updates an existing TypeOfCurrency entity.
   * @param id_typeOfCurrency - The ID of the TypeOfCurrency to update.
   * @param typeOfCurrencyRequest - The data for updating the TypeOfCurrency.
   * @returns A promise that resolves to the updated TypeOfCurrencyResponseDto.
   */
  async update(
    id_typeOfCurrency: number,
    typeOfCurrencyRequest: TypeOfCurrencyRequestDto,
  ): Promise<TypeOfCurrencyResponseDto> {
    const existingTypeOfCurrency = await this._typeOfCurrencyRepository.getOne({
      where: { id_typeOfCurrency },
    });

    if (!existingTypeOfCurrency) {
      throw new NotFoundException('El tipo de moneda no fue encontrado.');
    }

    const updatedTypeOfCurrencyData = this._mapper.map(
      typeOfCurrencyRequest,
      TypeOfCurrencyRequestDto,
      TypeOfCurrency,
    );

    const updatedTypeOfCurrency = await this._typeOfCurrencyRepository.update(
      id_typeOfCurrency,
      updatedTypeOfCurrencyData,
    );

    return this._mapper.map(
      updatedTypeOfCurrency,
      TypeOfCurrency,
      TypeOfCurrencyResponseDto,
    );
  }
}

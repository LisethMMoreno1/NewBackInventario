import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { ConflictException, Injectable } from '@nestjs/common';
import { TypeOfCurrencyRequestDto } from 'src/modules/maintenance/domain/type-of-currency/DTO/typeCurrency-request.dto';
import { TypeOfCurrencyResponseDto } from 'src/modules/maintenance/domain/type-of-currency/DTO/typeCurrency-response.dto';
import { TypeOfCurrency } from 'src/modules/maintenance/domain/type-of-currency/typeCurrency.entity';
import { TypeOfCurrencyRepository } from 'src/modules/maintenance/infrastruture/persistence/repositories/typeCurrency.repository';

@Injectable()
export class CreateTypeOfCurrencyService {
  /**
   * Constructor for CreateTypeOfCurrencyService.
   * @param _mapper - The mapper used for mapping objects.
   * @param _typeOfCurrencyRepository - The repository for managing TypeOfCurrency entities.
   */

  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _typeOfCurrencyRepository: TypeOfCurrencyRepository,
  ) {}

  async handle(
    typeOfCurrencyRequest: TypeOfCurrencyRequestDto,
  ): Promise<TypeOfCurrencyResponseDto> {
    const typeOfCurrencyMap = this._mapper.map(
      typeOfCurrencyRequest,
      TypeOfCurrencyRequestDto,
      TypeOfCurrency,
    );

    const existingTypeOfCurrency = await this._typeOfCurrencyRepository.getOne({
      where: {
        id_typeOfCurrency: typeOfCurrencyMap?.id_typeOfCurrency,
      },
    });

    if (existingTypeOfCurrency?.divisa_typeOfCurrency)
      throw new ConflictException('Ya existe una moneda con ese nombre');

    const createdTypeOfCurrency =
      await this._typeOfCurrencyRepository.create(typeOfCurrencyMap);

    return this._mapper.map(
      createdTypeOfCurrency,
      TypeOfCurrency,
      TypeOfCurrencyResponseDto,
    );
  }
}

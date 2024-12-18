import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { TypeOfCurrencyRequestDto } from 'src/modules/maintenance/domain/type-Of-currency/DTO/typeCurrency-request.dto';
import { TypeOfCurrencyResponseDto } from 'src/modules/maintenance/domain/type-Of-currency/DTO/typeCurrency-response.dto';
import { TypeOfCurrency } from 'src/modules/maintenance/domain/type-Of-currency/typeCurrency.entity';

/**
 * User profile
 */
@Injectable()
export class TypeOfCurrencyProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, TypeOfCurrency, TypeOfCurrencyResponseDto);
      createMap(mapper, TypeOfCurrencyRequestDto, TypeOfCurrency);
    };
  }
}

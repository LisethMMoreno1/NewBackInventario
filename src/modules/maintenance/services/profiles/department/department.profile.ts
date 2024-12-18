import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { Bank } from 'src/modules/maintenance/domain/bank/bank.entity';
import { BankRequestDto } from 'src/modules/maintenance/domain/bank/DTO/bank-request.dto';
import { BankResponseDto } from 'src/modules/maintenance/domain/bank/DTO/bank-response.dto';

/**
 * User profile
 */
@Injectable()
export class BankProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, Bank, BankResponseDto);
      createMap(mapper, BankRequestDto, Bank);
    };
  }
}

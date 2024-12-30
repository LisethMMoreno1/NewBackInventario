import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { OptionRequestDto } from 'src/modules/administration/domain/option/DTO/option-request.dto';
import { OptionResponseDto } from 'src/modules/administration/domain/option/DTO/option-response.dto';
import { Option } from 'src/modules/administration/domain/option/option.entity';

/**
 * User profile
 */
@Injectable()
export class OptionProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, Option, OptionResponseDto);
      createMap(mapper, OptionRequestDto, Option);
    };
  }
}

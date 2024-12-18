import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { City } from 'src/modules/maintenance/domain/cities/cities.entity';
import { CityRequestDto } from 'src/modules/maintenance/domain/cities/DTO/cities-request.dto';
import { CityResponseDto } from 'src/modules/maintenance/domain/cities/DTO/cities-responce.dto';

/**
 * User profile
 */
@Injectable()
export class CityProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, City, CityResponseDto);
      createMap(mapper, CityRequestDto, City);
    };
  }
}

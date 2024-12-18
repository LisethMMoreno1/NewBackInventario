import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { TypeOfGenderRequestDto } from 'src/modules/maintenance/domain/type-of-gender/DTO/typeGender-request.dto';
import { TypeOfGenderResponseDto } from 'src/modules/maintenance/domain/type-of-gender/DTO/typeGender-response.dto';
import { TypeOfGender } from 'src/modules/maintenance/domain/type-of-gender/typeGender.entity';

/**
 * User profile
 */
@Injectable()
export class TypeOfGenderProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, TypeOfGender, TypeOfGenderResponseDto);
      createMap(mapper, TypeOfGenderRequestDto, TypeOfGender);
    };
  }
}

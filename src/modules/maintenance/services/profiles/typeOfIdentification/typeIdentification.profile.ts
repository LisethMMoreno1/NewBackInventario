import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { TypeOfIdentificationRequestDto } from 'src/modules/maintenance/domain/type-of-identification/DTO/typeIdentification-request.dto';
import { TypeOfIdentificationResponseDto } from 'src/modules/maintenance/domain/type-of-identification/DTO/typeIdentification-response.dto';
import { TypeOfIdentification } from 'src/modules/maintenance/domain/type-of-identification/typeidentification.entity';

/**
 * User profile
 */
@Injectable()
export class TypeOfIdentificationProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, TypeOfIdentification, TypeOfIdentificationResponseDto);
      createMap(mapper, TypeOfIdentificationRequestDto, TypeOfIdentification);
    };
  }
}

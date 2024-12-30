import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { SubmoduleRequestDto } from 'src/modules/administration/domain/subModule/DTO/subModule-request.dto';
import { SubmoduleResponseDto } from 'src/modules/administration/domain/subModule/DTO/subModule-response.dto';
import { Submodule } from 'src/modules/administration/domain/subModule/subModule.entity';

/**
 * User profile
 */
@Injectable()
export class subModuleProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, Submodule, SubmoduleResponseDto);
      createMap(mapper, SubmoduleRequestDto, Submodule);
    };
  }
}

import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { RoleModuleRequestDto } from 'src/modules/administration/domain/roleModule/DTO/roleModule-request.dto';
import { RoleModuleResponseDto } from 'src/modules/administration/domain/roleModule/DTO/roleModule-response.dto';
import { RoleModule } from 'src/modules/administration/domain/roleModule/roleModule.entity';

/**
 * User profile
 */
@Injectable()
export class RoleModuleProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, RoleModule, RoleModuleResponseDto);
      createMap(mapper, RoleModuleRequestDto, RoleModule);
    };
  }
}

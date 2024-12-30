import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { RoleOptionRequestDto } from 'src/modules/administration/domain/roleOption/DTO/roleOption-request.dto';
import { RoleOptionResponseDto } from 'src/modules/administration/domain/roleOption/DTO/roleOption-response.dto';
import { RoleOption } from 'src/modules/administration/domain/roleOption/roleOption.entity';

/**
 * User profile
 */
@Injectable()
export class RoleOptionProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, RoleOption, RoleOptionResponseDto);
      createMap(mapper, RoleOptionRequestDto, RoleOption);
    };
  }
}

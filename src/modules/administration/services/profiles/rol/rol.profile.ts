import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { RoleRequestDto } from 'src/modules/administration/domain/rol/DTO/rol-request.dto';
import { RoleResponseDto } from 'src/modules/administration/domain/rol/DTO/rol-response.dto';
import { Role } from 'src/modules/administration/domain/rol/rol.entity';

/**
 * User profile
 */
@Injectable()
export class RoleProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, Role, RoleResponseDto);
      createMap(mapper, RoleRequestDto, Role);
    };
  }
}

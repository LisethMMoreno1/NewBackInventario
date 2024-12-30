import { Injectable } from '@nestjs/common';
import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { User } from 'src/modules/administration/domain/user/user.entity';
import { UserResponseDto } from 'src/modules/administration/domain/user/DTO/user-response.dto';
import { UserRequestDto } from 'src/modules/administration/domain/user/DTO/user-request.dto';
import { Role } from 'src/modules/administration/domain/rol/rol.entity';
import { RoleRequestDto } from 'src/modules/administration/domain/rol/DTO/rol-request.dto';

/**
 * User profile
 */
@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, User, UserResponseDto);
      createMap(mapper, UserRequestDto, User);
      createMap(mapper, RoleRequestDto, Role);
    };
  }
}

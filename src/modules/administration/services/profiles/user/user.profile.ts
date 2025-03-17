import { createMap, forMember, mapFrom, Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { UserRequestDto } from 'src/modules/administration/domain/user/DTO/user-request.dto';
import { UserResponseDto } from 'src/modules/administration/domain/user/DTO/user-response.dto';
import { User } from 'src/modules/administration/domain/user/user.entity';

import { ToolRequestDto } from 'src/modules/administration/domain/tool/DTO/tool-request.dto';
import { Tool } from 'src/modules/administration/domain/tool/tool.entity';
import { LoginRequestDto } from 'src/modules/administration/domain/user/DTO/login-request.dto';
import { LoginResponseDto } from 'src/modules/administration/domain/user/DTO/login-response.dto';

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, UserRequestDto, User);
      createMap(mapper, ToolRequestDto, Tool);
      createMap(mapper, LoginRequestDto, User);
      createMap(mapper, User, LoginResponseDto);

      createMap(
        mapper,
        User,
        UserResponseDto,

        forMember(
          (dest) => dest.tool,
          mapFrom((src) => {
            return src.tool?.id;
          }),
        ),
      );
    };
  }
}

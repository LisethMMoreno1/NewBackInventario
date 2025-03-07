import { Injectable } from '@nestjs/common';
import { createMap, forMember, mapFrom, Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { User } from 'src/modules/administration/domain/user/user.entity';
import { UserResponseDto } from 'src/modules/administration/domain/user/DTO/user-response.dto';
import { UserRequestDto } from 'src/modules/administration/domain/user/DTO/user-request.dto';

import { ToolRequestDto } from 'src/modules/administration/domain/tool/DTO/tool-request.dto';
import { Tool } from 'src/modules/administration/domain/tool/tool.entity';

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
    console.log('UserProfile initialized with mapper:', mapper);
  }

  override get profile() {
    return (mapper) => {
      console.log('Configuring mapping for UserRequestDto -> User');
      createMap(mapper, UserRequestDto, User);
      console.log('Mapping for UserRequestDto -> User configured');

      console.log('Configuring mapping for RoleRequestDto -> Role');

      console.log('Mapping for RoleRequestDto -> Role configured');

      console.log('Configuring mapping for ToolRequestDto -> Tool');
      createMap(mapper, ToolRequestDto, Tool);
      console.log('Mapping for ToolRequestDto -> Tool configured');

      console.log(
        'Configuring mapping for User -> UserResponseDto with custom members',
      );
      createMap(
        mapper,
        User,
        UserResponseDto,
        // Para la propiedad 'tool': extrae el id de la herramienta
        forMember(
          (dest) => dest.tool,
          mapFrom((src) => {
            console.log("Mapping 'tool' property. Source tool:", src.tool);
            return src.tool?.id;
          }),
        ),
      );
      console.log('Mapping for User -> UserResponseDto configured');
    };
  }
}

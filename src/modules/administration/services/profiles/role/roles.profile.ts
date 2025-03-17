// roles.profile.ts
import { Injectable } from '@nestjs/common';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper, createMap, forMember, mapFrom } from '@automapper/core';
import { RolesRequestDto } from 'src/modules/administration/domain/role/DTO/role-request.dto';
import { RolesResponseDto } from 'src/modules/administration/domain/role/DTO/role-response.dto';

@Injectable()
export class RolesProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper: Mapper) => {
      createMap(
        mapper,
        RolesRequestDto,
        RolesResponseDto,
        forMember(
          (dest) => dest.role,
          mapFrom((src) => src.role),
        ),
      );
    };
  }
}

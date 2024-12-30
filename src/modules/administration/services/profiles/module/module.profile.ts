import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { ModuleRequestDto } from 'src/modules/administration/domain/module/DTO/module-request.dto'; // DTO de solicitud
import { ModuleResponseDto } from 'src/modules/administration/domain/module/DTO/module-response.dto';
import { ModuleDetailsResponseDto } from 'src/modules/administration/domain/module/DTO/moduleDetails-response.dto';
import { Module } from 'src/modules/administration/domain/module/module.entity';

/**
 * Module profile
 */
@Injectable()
export class ModuleProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      // Mapeo entre el DTO de solicitud y la entidad
      createMap(mapper, ModuleRequestDto, Module);

      // Mapeo de la entidad a la respuesta de DTO
      createMap(mapper, Module, ModuleResponseDto);
      createMap(mapper, Module, ModuleDetailsResponseDto);
    };
  }
}

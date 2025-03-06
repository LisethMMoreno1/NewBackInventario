import { createMap, type Mapper } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { ToolRequestDto } from 'src/modules/administration/domain/tool/DTO/tool-request.dto';
import { ToolResponseDto } from 'src/modules/administration/domain/tool/DTO/tool-response.dto';
import { ToolUpdateDto } from 'src/modules/administration/domain/tool/DTO/tool-update.dto';
import { Tool } from 'src/modules/administration/domain/tool/tool.entity';

/**
 * Tool profile
 */
@Injectable()
export class ToolProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper: Mapper) => {
      createMap(mapper, Tool, ToolResponseDto);
      createMap(mapper, ToolRequestDto, Tool);
      createMap(mapper, ToolUpdateDto, Tool);
    };
  }
}

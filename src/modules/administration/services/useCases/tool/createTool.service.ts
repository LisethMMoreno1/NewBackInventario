import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { ToolRequestDto } from 'src/modules/administration/domain/tool/DTO/tool-request.dto';
import { ToolResponseDto } from 'src/modules/administration/domain/tool/DTO/tool-response.dto';
import { Tool } from 'src/modules/administration/domain/tool/tool.entity';
import { ToolRepository } from 'src/modules/administration/infrastructure/persistence/repositories/tool.repository';

@Injectable()
export class CreateToolService {
  /**
   * Creates an instance of the CreateModuleService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _toolRepository - The repository for managing Module entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _toolRepository: ToolRepository,
  ) {}

  async create(toolDto: ToolRequestDto): Promise<ToolResponseDto> {
    const tool = this._mapper.map(toolDto, ToolRequestDto, Tool);
    const newTool = await this._toolRepository.save(tool);
    return this._mapper.map(newTool, Tool, ToolResponseDto);
  }
}

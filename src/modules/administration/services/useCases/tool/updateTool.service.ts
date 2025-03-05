import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ToolRequestDto } from 'src/modules/administration/domain/tool/DTO/tool-request.dto';
import { Tool } from 'src/modules/administration/domain/tool/tool.entity';
import { ToolRepository } from 'src/modules/administration/infrastructure/persistence/repositories/tool.repository';

@Injectable()
export class UpdateToolService {
  /**
   * Creates an instance of the CreateModuleService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _toolRepository - The repository for managing Module entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _toolRepository: ToolRepository,
  ) {}

  async update(id: number, toolDto: Partial<ToolRequestDto>): Promise<Tool> {
    const existingTool = await this._toolRepository.getOne({ where: { id } });
    if (!existingTool) {
      throw new NotFoundException(`Tool with ID ${id} not found`);
    }

    if (toolDto.type && toolDto.type !== existingTool.type) {
      throw new BadRequestException('Type cannot be modified');
    }

    const updatedTool = Object.assign(existingTool, toolDto);
    return this._toolRepository.save(updatedTool);
  }
}

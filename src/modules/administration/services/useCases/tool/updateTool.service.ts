import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ToolUpdateDto } from 'src/modules/administration/domain/tool/DTO/tool-update.dto';
import { Tool } from 'src/modules/administration/domain/tool/tool.entity';
import { ToolRepository } from 'src/modules/administration/infrastructure/persistence/repositories/tool.repository';

@Injectable()
export class UpdateToolService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _toolRepository: ToolRepository,
  ) {}

  async update(id: number, toolDto: Partial<ToolUpdateDto>): Promise<Tool> {
    const existingTool = await this._toolRepository.getOne({ where: { id } });
    if (!existingTool) {
      throw new NotFoundException(`Tool with ID ${id} not found`);
    }

    // Solo se actualizarán name y description
    const updatedTool = Object.assign(existingTool, toolDto);
    return this._toolRepository.save(updatedTool);
  }
}

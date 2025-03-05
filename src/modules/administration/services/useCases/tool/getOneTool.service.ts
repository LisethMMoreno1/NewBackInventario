import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { Tool } from 'src/modules/administration/domain/tool/tool.entity';
import { ToolRepository } from 'src/modules/administration/infrastructure/persistence/repositories/tool.repository';

@Injectable()
export class GetOneToolService {
  /**
   * Creates an instance of the CreateModuleService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _toolRepository - The repository for managing Module entities.
   */

  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _toolRepository: ToolRepository,
  ) {}

  async handle(id: number): Promise<Tool | null> {
    return this._toolRepository.getOne({ where: { id } });
  }
}

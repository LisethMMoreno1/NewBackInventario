import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ToolRepository } from 'src/modules/administration/infrastructure/persistence/repositories/tool.repository';

@Injectable()
export class DeleteToolService {
  /**
   * Creates an instance of the DeleteToolService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _toolRepository - The repository for managing Tool entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _toolRepository: ToolRepository,
  ) {}

  /**
   * Handle the deletion of a tool.
   * @param id - The ID of the tool to be deleted.
   * @throws NotFoundException if the tool is not found.
   * @returns A boolean indicating whether the deletion was successful.
   */
  async handle(id: number): Promise<boolean> {
    const existingTool = await this._toolRepository.getOne({ where: { id } });
    if (!existingTool) {
      throw new NotFoundException(`Tool with ID ${id} not found`);
    }

    // Elimina la herramienta y devuelve true si la operación fue exitosa
    await this._toolRepository.delete(id);
    return true;
  }
}

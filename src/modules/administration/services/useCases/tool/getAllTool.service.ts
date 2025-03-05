import { Mapper } from '@automapper/core'; // Asegurar la importación correcta
import { InjectMapper } from '@automapper/nestjs';
import { Tool } from 'src/modules/administration/domain/tool/tool.entity';
import { ToolRepository } from 'src/modules/administration/infrastructure/persistence/repositories/tool.repository';

export class GetAllToolService {
  /**
   * Creates an instance of the GetAllToolService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _toolRepository - The repository for managing Tool entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _toolRepository: ToolRepository,
  ) {}

  /**
   * Retrieves tools by type or by ID.
   * @param type - Optional filter by tool type.
   * @param id - Optional filter by tool ID.
   * @returns A promise resolving to an array of matching tools.
   */
  async findTools(type?: string, id?: string): Promise<Tool[]> {
    const query: Record<string, unknown> = {};

    if (type) {
      query.type = type;
    }

    if (id) {
      query.id = id;
    }

    const tools = await this._toolRepository.getAll(query);
    return tools ?? [];
  }
}

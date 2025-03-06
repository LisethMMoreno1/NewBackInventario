import { Injectable, Logger } from '@nestjs/common';
import { Tool } from 'src/modules/administration/domain/tool/tool.entity';
import { ToolRepository } from 'src/modules/administration/infrastructure/persistence/repositories/tool.repository';

@Injectable()
export class GetAllTypeService {
  private readonly logger = new Logger(GetAllTypeService.name);

  constructor(private readonly _toolsRepository: ToolRepository) {}

  async handle(type: string): Promise<Tool[]> {
    if (!type) {
      throw new Error('El tipo no es válido');
    }

    // Usar logger de NestJS en lugar de console.log
    this.logger.log(`Recibiendo tipo: ${type}`);

    return this._toolsRepository.getByType(type);
  }
}

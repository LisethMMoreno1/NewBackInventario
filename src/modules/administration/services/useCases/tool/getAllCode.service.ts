import { Injectable, NotFoundException } from '@nestjs/common';
import { Tool } from 'src/modules/administration/domain/tool/tool.entity';
import { ToolRepository } from 'src/modules/administration/infrastructure/persistence/repositories/tool.repository';

@Injectable()
export class GetAllCodeService {
  constructor(private readonly _toolRepository: ToolRepository) {}

  async handle(code: string): Promise<Tool[]> {
    console.log(
      `🔍 Código recibido antes de la conversión: ${code} (Tipo: ${typeof code})`,
    );

    // Validar que el código no esté vacío
    if (!code || typeof code !== 'string') {
      throw new Error('El código proporcionado no es válido.');
    }

    // Asegurar que el código sea un string y eliminar espacios en blanco
    const stringCode = String(code).trim();

    try {
      // Buscar herramientas por código utilizando búsqueda parcial
      const tools = await this._toolRepository.getByCode(stringCode);

      // Si no se encuentran herramientas, lanzar una excepción
      if (!tools || tools.length === 0) {
        throw new NotFoundException(
          `No se encontraron herramientas con el código: ${stringCode}`,
        );
      }

      console.log('✅ Herramientas obtenidas:', tools);
      return tools;
    } catch (error) {
      console.error('❌ Error al obtener herramientas:', error);

      // Relanzar la excepción con un mensaje más descriptivo
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new Error(
          'No se pudieron obtener los datos debido a un error interno.',
        );
      }
    }
  }
}

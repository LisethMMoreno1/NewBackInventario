import { HttpException, Injectable, Scope } from '@nestjs/common';
import { AdministrationContext } from '../context/administrationContext.service';
import {
  DeleteCriteriaType,
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from 'src/modules/database/types';
import { Tool } from 'src/modules/administration/domain/tool/tool.entity';

@Injectable({ scope: Scope.REQUEST })
export class ToolRepository {
  constructor(private readonly _context: AdministrationContext) {}

  async getAll(options?: GetAllCriteriaType<Tool>): Promise<Tool[]> {
    try {
      return await this._context.tool.getAll(options);
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error instanceof Error ? error.message : 'Error desconocido'}`,
        500,
      );
    }
  }

  async create(Tool: Tool): Promise<Tool> {
    try {
      const ToolData = await this._context.tool.create(Tool);
      const rawData = ToolData?.raw?.[0] ?? {};
      const generatedMaps = ToolData?.generatedMaps?.[0] ?? {};
      return {
        ...Tool,
        ...rawData,
        ...generatedMaps,
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error instanceof Error ? error.message : 'Error desconocido'}`,
        500,
      );
    }
  }

  async getOne(options: GetOneCriteriaType<Tool>): Promise<Tool | null> {
    try {
      const Tool = await this._context.tool.getOne(options);
      if (!Tool) {
        throw new HttpException('Usuario no encontrado', 404);
      }
      return Tool;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error instanceof Error ? error.message : 'Error desconocido'}`,
        500,
      );
    }
  }
  async update(criteria: UpdateCriteriaType<Tool>, Tool: Tool): Promise<Tool> {
    try {
      const updateTool = await this._context.tool.update(criteria, Tool);
      return {
        ...Tool,
        ...(updateTool?.raw?.[0] ?? {}),
        ...(updateTool?.generatedMaps?.[0] ?? {}),
      };
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error instanceof Error ? error.message : 'Error desconocido'}`,
        500,
      );
    }
  }

  async delete(criteria: DeleteCriteriaType<Tool>): Promise<Tool | null> {
    try {
      const deleteTool = await this._context.tool.delete(criteria);
      return deleteTool?.raw?.[0] ?? null;
    } catch (error) {
      throw new HttpException(
        `Error de DB: ${error instanceof Error ? error.message : 'Error desconocido'}`,
        500,
      );
    }
  }

  async save(Tool: Tool, options?: SaveOptionsType<Tool>): Promise<Tool> {
    try {
      return await this._context.tool.save(Tool, options);
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpException(`Error de DB: ${error.message}`, 500);
      } else {
        throw new HttpException('Error desconocido', 500);
      }
    }
  }

  async getByIdentificationNumber(id: number): Promise<Tool | null> {
    return this.getOne({ where: { id } });
  }
}

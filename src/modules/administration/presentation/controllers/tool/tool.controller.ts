import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { ToolRequestDto } from 'src/modules/administration/domain/tool/DTO/tool-request.dto';
import { ToolResponseDto } from 'src/modules/administration/domain/tool/DTO/tool-response.dto';
import { ToolUpdateDto } from 'src/modules/administration/domain/tool/DTO/tool-update.dto';
import { Tool } from 'src/modules/administration/domain/tool/tool.entity';
import { CreateToolService } from 'src/modules/administration/services/useCases/tool/createTool.service';
import { DeleteToolService } from 'src/modules/administration/services/useCases/tool/deleteTool.service';
import { GetAllCodeService } from 'src/modules/administration/services/useCases/tool/getAllCode.service';
import { GetAllToolService } from 'src/modules/administration/services/useCases/tool/getAllTool.service';
import { GetAllTypeService } from 'src/modules/administration/services/useCases/tool/getAlltype.service';
import { GetOneToolService } from 'src/modules/administration/services/useCases/tool/getOneTool.service';
import { UpdateToolService } from 'src/modules/administration/services/useCases/tool/updateTool.service';

@Controller('tools')
export class ToolController {
  constructor(
    private readonly _createToolService: CreateToolService,
    private readonly _getOneToolService: GetOneToolService,
    private readonly _getAllToolService: GetAllToolService,
    private readonly _updateToolService: UpdateToolService,
    private readonly _deleteToolService: DeleteToolService,
    private readonly _getAllTypeService: GetAllTypeService,
    private readonly _getAllCodeService: GetAllCodeService,
  ) {}

  @Get()
  async getAll(@Param('type') type?: string): Promise<ToolResponseDto[]> {
    return await this._getAllToolService.findTools(type);
  }

  @Get(':id')
  async handle(@Param('id') id: number): Promise<ToolResponseDto> {
    const tool = await this._getOneToolService.handle(id);
    if (!tool) {
      throw new NotFoundException(`Tool with ID ${id} not found`);
    }
    return tool;
  }

  @Post()
  async create(
    @Body() toolRequestDto: ToolRequestDto,
  ): Promise<ToolResponseDto> {
    return await this._createToolService.create(toolRequestDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() toolUpdateDto: ToolUpdateDto,
  ): Promise<ToolResponseDto> {
    return await this._updateToolService.update(id, toolUpdateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this._deleteToolService.handle(id);
  }

  @Get('type/:type')
  async getByType(@Param('type') type: string): Promise<Tool[]> {
    return this._getAllTypeService.handle(type);
  }

  @Get('code/:code')
  async getByCode(@Param('code') code: string): Promise<Tool[]> {
    return this._getAllCodeService.handle(code);
  }
}

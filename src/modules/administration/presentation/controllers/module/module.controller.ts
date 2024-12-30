import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ModuleRequestDto } from 'src/modules/administration/domain/module/DTO/module-request.dto';
import { Module } from 'src/modules/administration/domain/Module/Module.entity';
import { CreateModuleService } from 'src/modules/administration/services/useCases/module/createModule.service';
import { DeleteModuleService } from 'src/modules/administration/services/useCases/module/deleteModule.service';
import { GetAllModuleService } from 'src/modules/administration/services/useCases/module/getAllModule.service';
import { GetOneModuleService } from 'src/modules/administration/services/useCases/module/getOneModule.service';
import { UpdateModuleService } from 'src/modules/administration/services/useCases/module/updateModule.service';

@Controller('modules')
export class ModuleController {
  constructor(
    private readonly _createModuleService: CreateModuleService,
    private readonly _deleteModuleService: DeleteModuleService,
    private readonly _getAllModuleService: GetAllModuleService,
    private readonly _getOneModuleService: GetOneModuleService,
    private readonly _updateModuleService: UpdateModuleService,
  ) {}

  /**
   * Create a new module.
   */
  @Post()
  async create(@Body() moduleRequestDto: ModuleRequestDto) {
    return this._createModuleService.handle(moduleRequestDto);
  }

  /**
   * Get all modules.
   */
  @Get()
  async getAll(): Promise<Module[]> {
    return await this._getAllModuleService.handle();
  }

  /**
   * Get one module by id.
   * @param id - The id of the module to retrieve.
   */
  @Get(':id')
  async getOne(@Param('id') id: number): Promise<Module> {
    return await this._getOneModuleService.handle(id);
  }

  /**
   * Update a module.
   * @param id - The id of the module to update.
   * @param module - The updated module data.
   */
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() module: Module,
  ): Promise<Module> {
    return await this._updateModuleService.handle(id, module);
  }

  /**
   * Delete a module.
   * @param id - The id of the module to delete.
   */
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Module> {
    return await this._deleteModuleService.handle(id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SubmoduleRequestDto } from 'src/modules/administration/domain/subModule/DTO/subModule-request.dto';
import { SubmoduleResponseDto } from 'src/modules/administration/domain/subModule/DTO/subModule-response.dto';
import { CreateSubModuleService } from 'src/modules/administration/services/useCases/subModule/createSubModule.service';
import { DeleteSubModuleService } from 'src/modules/administration/services/useCases/subModule/deleteSubModule.service';
import { GetAllSubModuleService } from 'src/modules/administration/services/useCases/subModule/getAllSubModule.service';
import { GetOneSubModuleService } from 'src/modules/administration/services/useCases/subModule/getOneSubModule.service';
import { UpdateSubModuleService } from 'src/modules/administration/services/useCases/subModule/updateSubModule.service';

@Controller('submodules')
export class SubmoduleController {
  constructor(
    private readonly _createSubModuleService: CreateSubModuleService,
    private readonly _deleteSubModuleService: DeleteSubModuleService,
    private readonly _getAllSubModuleService: GetAllSubModuleService,
    private readonly _getOneSubModuleService: GetOneSubModuleService,
    private readonly _updateSubModuleService: UpdateSubModuleService,
  ) {}
  /**
   * Create a new submodule
   */
  @Post()
  async create(
    @Body() submoduleRequest: SubmoduleRequestDto,
  ): Promise<SubmoduleResponseDto> {
    return this._createSubModuleService.handle(submoduleRequest);
  }

  /**
   * Get all submodules
   */
  @Get()
  async getAll(): Promise<SubmoduleResponseDto[]> {
    return this._getAllSubModuleService.handle();
  }

  /**
   * Get one submodule by ID
   */
  @Get(':id')
  async getSubmoduleById(
    @Param('id') id: number,
  ): Promise<SubmoduleResponseDto> {
    return this._getOneSubModuleService.handle(id);
  }

  /**
   * Update an existing submodule
   */
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() submoduleRequest: SubmoduleRequestDto,
  ): Promise<SubmoduleResponseDto> {
    return this._updateSubModuleService.handle(id, submoduleRequest);
  }

  /**
   * Delete a submodule by ID
   */
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this._deleteSubModuleService.handle(id);
  }
}

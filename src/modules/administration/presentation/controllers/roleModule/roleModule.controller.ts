import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { RoleModuleRequestDto } from 'src/modules/administration/domain/roleModule/DTO/roleModule-request.dto';
import { RoleModuleResponseDto } from 'src/modules/administration/domain/roleModule/DTO/roleModule-response.dto';
import { CreateRoleModuleService } from 'src/modules/administration/services/useCases/roleModule/createRoleModule.service';
import { DeleteRoleModuleService } from 'src/modules/administration/services/useCases/roleModule/deleteRoleModule.service';
import { GetAllRoleModuleService } from 'src/modules/administration/services/useCases/roleModule/getAllRoleModule.service';
import { GetOneRoleModuleService } from 'src/modules/administration/services/useCases/roleModule/getOneRoleModule.service';
import { UpdateRoleModuleService } from 'src/modules/administration/services/useCases/roleModule/updateRoleModule.service';

@Controller('role-modules')
export class RoleModuleController {
  constructor(
    private readonly _createRoleModuleService: CreateRoleModuleService,
    private readonly _deleteRoleModuleService: DeleteRoleModuleService,
    private readonly _getAllRoleModuleService: GetAllRoleModuleService,
    private readonly _getOneRoleModuleService: GetOneRoleModuleService,
    private readonly _updateRoleModuleService: UpdateRoleModuleService,
  ) {}

  @Get()
  async getAll(): Promise<RoleModuleResponseDto[]> {
    return this._getAllRoleModuleService.handle();
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<RoleModuleResponseDto> {
    return this._getOneRoleModuleService.handle(id);
  }

  @Post()
  async create(
    @Body() roleModuleDto: RoleModuleRequestDto,
  ): Promise<RoleModuleResponseDto> {
    const { role_id, module_id, submodule_id } = roleModuleDto;
    return this._createRoleModuleService.handle(
      role_id,
      module_id,
      submodule_id,
    );
  }

  @Put(':id')
  async update(@Param('id') id: number): Promise<RoleModuleResponseDto> {
    return this._updateRoleModuleService.handle(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ message: string }> {
    return this._deleteRoleModuleService.handle(id);
  }
}

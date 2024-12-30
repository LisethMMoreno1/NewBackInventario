import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  Get,
  Put,
} from '@nestjs/common';

import { RoleOptionRequestDto } from 'src/modules/administration/domain/roleOption/DTO/roleOption-request.dto';
import { RoleOptionResponseDto } from 'src/modules/administration/domain/roleOption/DTO/roleOption-response.dto';
import { CreateRoleOptionService } from 'src/modules/administration/services/useCases/roleOption/createRoleOption.service';
import { DeleteRoleOptionService } from 'src/modules/administration/services/useCases/roleOption/deleteRoleOption.service';
import { GetAllRoleOptionService } from 'src/modules/administration/services/useCases/roleOption/getAllRoleOption.service';
import { GetOneRoleOptionService } from 'src/modules/administration/services/useCases/roleOption/getOneRoleOption.service';
import { UpdateRoleOptionService } from 'src/modules/administration/services/useCases/roleOption/updateRoleOption.service';

@Controller('role-options')
export class RoleOptionController {
  constructor(
    private readonly _createRoleOptionService: CreateRoleOptionService,
    private readonly _deleteRoleOptionService: DeleteRoleOptionService,
    private readonly _getAllRoleOptionService: GetAllRoleOptionService,
    private readonly _getOneRoleOptionService: GetOneRoleOptionService,
    private readonly _updateRoleOptionService: UpdateRoleOptionService,
  ) {}

  // Crear una asignación de rol y opción
  @Post()
  async create(
    @Body() roleOptionRequest: RoleOptionRequestDto,
  ): Promise<RoleOptionResponseDto> {
    return this._createRoleOptionService.handle(roleOptionRequest);
  }

  // Eliminar una asignación de rol y opción por ID
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this._deleteRoleOptionService.handle(id);
  }

  // Obtener todas las asignaciones de rol y opción
  @Get()
  async getAll(): Promise<RoleOptionResponseDto[]> {
    return this._getAllRoleOptionService.handle();
  }

  // Obtener una asignación de rol y opción por ID
  @Get(':id')
  async getOne(@Param('id') id: number): Promise<RoleOptionResponseDto> {
    return this._getOneRoleOptionService.handle(id);
  }

  // Actualizar una asignación de rol y opción por ID
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() roleOptionRequest: RoleOptionRequestDto,
  ): Promise<RoleOptionResponseDto> {
    return this._updateRoleOptionService.handle(id, roleOptionRequest);
  }
}

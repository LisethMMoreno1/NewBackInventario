import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RoleResponseDto } from 'src/modules/administration/domain/rol/DTO/rol-response.dto';
import { CreateRoleService } from 'src/modules/administration/services/useCases/rol/createRole.service';
import { DeleteRoleService } from 'src/modules/administration/services/useCases/rol/deleteRole.service';
import { GetAllRoleService } from 'src/modules/administration/services/useCases/rol/getAllRole.service';
import { GetOneRoleService } from 'src/modules/administration/services/useCases/rol/getOneRole.service';
import { UpdateRoleService } from 'src/modules/administration/services/useCases/rol/updateRole.service';

/**
 * Role controller
 */
@Controller('roles')
@ApiTags('Roles')
export class RoleController {
  constructor(
    private readonly _createRoleService: CreateRoleService,
    private readonly _deleteRoleService: DeleteRoleService,
    private readonly _getAllRoleService: GetAllRoleService,
    private readonly _getOneRoleService: GetOneRoleService,
    private readonly _updateRoleService: UpdateRoleService,
  ) {}

  /**
   * Create a new Role
   * @param roleRequest
   * @returns The created Role
   */
  @Post('create')
  async createRole(
    @Body() roleRequest: RoleResponseDto,
  ): Promise<RoleResponseDto> {
    return await this._createRoleService.handle(roleRequest);
  }

  /**
   * Get all Roles
   * @returns List of Roles
   */
  @Get()
  async getAllRoles(): Promise<RoleResponseDto[]> {
    return await this._getAllRoleService.handle();
  }

  /**
   * Get a Role by ID
   * @param id - The ID of the role
   * @returns The Role data
   */
  @Get(':id')
  async getRoleById(@Param('id') id: number): Promise<RoleResponseDto> {
    return await this._getOneRoleService.handle(id);
  }

  /**
   * Update an existing Role
   * @param id - The ID of the role to update
   * @param roleRequest - The data to update the role
   * @returns The updated Role
   */
  @Put(':id')
  async updateRole(
    @Param('id') id: number,
    @Body() roleRequest: RoleResponseDto,
  ): Promise<RoleResponseDto> {
    return await this._updateRoleService.handle(id, roleRequest);
  }

  /**
   * Delete a Role by ID
   * @param id - The ID of the role to delete
   */
  @Delete(':id')
  async deleteRole(@Param('id') id: number): Promise<void> {
    return await this._deleteRoleService.handle(id);
  }
}

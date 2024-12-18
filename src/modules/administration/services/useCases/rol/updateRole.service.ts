import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { RolRepository } from 'src/modules/administration/infrastructure/persistence/repositories/rol.repository';
import { Role } from 'src/modules/administration/domain/rol/rol.entity';
import { RoleResponseDto } from 'src/modules/administration/domain/rol/DTO/rol-response.dto'; // DTO de respuesta

@Injectable()
export class UpdateRoleService {
  /**
   * Crea una instancia del servicio UpdateRoleService.
   * @param _mapper - El mapper utilizado para mapear objetos.
   * @param _rolRepository - El repositorio para manejar las entidades Role.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _rolRepository: RolRepository,
  ) {}

  /**
   * Actualiza un rol existente.
   * @param id_rol - El ID del rol a actualizar.
   * @param roleResponseDto - Los datos para actualizar el rol (usando RoleResponseDto).
   * @returns El rol actualizado.
   */
  async handle(
    id_rol: number,
    roleResponseDto: RoleResponseDto,
  ): Promise<Role> {
    const role = await this._rolRepository.getOne({ where: { id_rol } });
    if (!role) {
      throw new NotFoundException(`Role with ID ${id_rol} not found`);
    }

    // Mapea los datos de RoleResponseDto a Role
    const updatedRole = this._mapper.map(
      roleResponseDto,
      RoleResponseDto,
      Role,
    );

    // Actualiza el rol en la base de datos
    await this._rolRepository.update(id_rol, updatedRole);

    // Retorna el rol actualizado
    return this._rolRepository.getOne({ where: { id_rol } });
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectMapper } from '@automapper/nestjs';
import { RolRepository } from 'src/modules/administration/infrastructure/persistence/repositories/rol.repository';
import { Mapper } from '@automapper/core';

@Injectable()
export class DeleteRoleService {
  /**
   * Crea una instancia del servicio DeleteRoleService.
   * @param _mapper - El mapper utilizado para mapear objetos.
   * @param _rolRepository - El repositorio para manejar las entidades Role.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _rolRepository: RolRepository,
  ) {}

  /**
   * Elimina un rol por ID.
   * @param id_rol - El ID del rol a eliminar.
   */
  async handle(id_rol: number): Promise<void> {
    const role = await this._rolRepository.getOne({
      where: { id_rol: id_rol },
    });
    if (!role) {
      throw new NotFoundException(`Role with ID ${id_rol} not found`);
    }

    // Elimina el rol
    await this._rolRepository.delete(id_rol);
  }
}

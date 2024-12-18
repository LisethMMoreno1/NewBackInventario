import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Role } from 'src/modules/administration/domain/rol/rol.entity';
import { RolRepository } from 'src/modules/administration/infrastructure/persistence/repositories/rol.repository';

@Injectable()
export class GetOneRoleService {
  /**
   * Creates an instance of the CreateUserService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _userRepository - The repository for managing User entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _rolRepository: RolRepository,
  ) {}

  async handle(id_rol: number): Promise<Role> {
    const role = await this._rolRepository.getOne({ where: { id_rol } });
    if (!role) {
      throw new NotFoundException(`Role with ID ${id_rol} not found`);
    }
    return role;
  }
}

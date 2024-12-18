import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { RoleRequestDto } from 'src/modules/administration/domain/rol/DTO/rol-request.dto';
import { Role } from 'src/modules/administration/domain/rol/rol.entity';
import { RolRepository } from 'src/modules/administration/infrastructure/persistence/repositories/rol.repository';

@Injectable()
export class CreateRoleService {
  /**
   * Creates an instance of the CreateUserService class.
   * @param _mapper - The mapper used for mapping objects.
   * @param _userRepository - The repository for managing User entities.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _rolRepository: RolRepository,
  ) {}

  async handle(roleRequest: RoleRequestDto): Promise<Role> {
    const role = this._mapper.map(roleRequest, RoleRequestDto, Role);
    return await this._rolRepository.create(role);
  }
}

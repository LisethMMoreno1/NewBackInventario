import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/modules/administration/domain/user/user.entity';
import { UserRepository } from 'src/modules/administration/infrastructure/persistence/repositories/user.repository';

@Injectable()
export class GetOneUserService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRepository: UserRepository,
  ) {}

  async handle(identificationNumber: number): Promise<User | null> {
    const user = await this._userRepository.getOne({
      where: { identificationNumber },
      relations: ['role', 'tool'],
    });

    if (!user) {
      throw new NotFoundException(
        `Usuario con ID ${identificationNumber} no encontrado`,
      );
    }

    return user;
  }
}

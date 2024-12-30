import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/modules/administration/domain/user/user.entity';
import { UserRepository } from 'src/modules/administration/infrastructure/persistence/repositories/user.repository';

@Injectable()
export class UpdateUserService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRepository: UserRepository,
  ) {}

  async handle(
    identificationNumber: number,
    userData: Partial<User>,
  ): Promise<User | undefined> {
    const userToUpdate = await this._userRepository.getOne({
      where: { identificationNumber },
    });

    if (!userToUpdate) {
      throw new NotFoundException(
        `Usuario con ID ${identificationNumber} no encontrado`,
      );
    }

    if (userData.password) {
      userData.password = await bcrypt.hash(userData.password, 10);
    }

    const updatedUser: User = {
      ...userToUpdate,
      ...userData,
    };

    await this._userRepository.update(userToUpdate, updatedUser);

    return await this._userRepository.save(updatedUser);
  }
}

import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/administration/domain/user/user.entity';
import { UserRepository } from 'src/modules/administration/infrastructure/persistence/repositories/user.repository';

@Injectable()
export class GetAllUserService {
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userRepository: UserRepository,
  ) {}

  async handle(): Promise<User[]> {
    return await this._userRepository.getAll({
      relations: ['role', 'typeOfIdentification', 'typeOfGender'],
    });
  }
}
